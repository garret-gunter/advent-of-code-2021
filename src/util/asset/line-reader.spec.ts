import { LineReader } from './line-reader';
import { PassThrough, Readable } from 'stream';
import { EOL } from 'os';

describe('LineReader', () => {
  it('should be defined', () => {
    const input = new PassThrough();

    expect(new LineReader(() => input)).toBeDefined();
  });

  it('should iterate over the collection', async () => {
    const input = new Readable({
      read(): void {
        return;
      },
    });

    let count = 0;
    const values = [199, 200, 208];
    values.forEach((value) => input.push(`${value}${EOL}`));
    input.push(null);

    const reader = new LineReader(() => input);
    const promise = reader.each((line: string) => {
      expect(parseInt(line)).toBe(values[count]);
      count++;
    });

    await new Promise((resolve) => {
      void promise.then(() => {
        expect(count).toBe(3);

        resolve(undefined);
      });
    });
  });
});
