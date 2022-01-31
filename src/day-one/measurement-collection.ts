import { Readable } from 'stream';
import { createInterface } from 'readline';
import { once } from 'events';

export class MeasurementCollection {
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
}
