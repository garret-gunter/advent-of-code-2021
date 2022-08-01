import { Readable } from 'stream';
import { createInterface } from 'readline';
import { once } from 'events';
import { createReadStream } from 'fs';

export class LineReader {
  constructor(private provider: () => Readable) {}

  async each(callback: (line: string) => void): Promise<void> {
    const stream = this.provider();
    const rl = createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    stream.on('close', () => {
      rl.close();
    });

    rl.on('line', (line) => {
      callback(line);
    });

    await once(rl, 'close');
  }

  asIterable(): AsyncIterable<string> {
    // Keep a reference to 'this' to delay opening file until iteration starts.
    return new (class implements AsyncIterable<string> {
      constructor(private reader: LineReader) {}

      [Symbol.asyncIterator](): AsyncIterator<string> {
        // Use callback to resolve promise if one is waiting on a result.
        let pendingPromise: () => void | null = null;

        // Iterator results.
        const items: Array<IteratorResult<string>> = [];
        const pushItem = (item: IteratorResult<string>) => {
          items.push(item);

          if (pendingPromise) {
            pendingPromise();
          }
        };

        // Start the reader
        void this.reader
          // Push each line to pending results.
          .each((line: string) => pushItem({ value: line, done: false }))
          // Push final iterator item when the file has closed.
          .then(() => pushItem({ value: undefined, done: true }));

        return {
          next() {
            // Pop waiting items immediately
            if (items.length > 0) {
              const value = items.pop();
              return Promise.resolve(value);
            }

            // Wait for the next item if no items ready.
            return new Promise((resolve) => {
              pendingPromise = () => {
                pendingPromise = null;
                const value = items.pop();
                resolve(value);
              };
            });
          },
        };
      }
    })(this);
  }

  static forFile(path: string) {
    return new LineReader(() => createReadStream(path));
  }
}
