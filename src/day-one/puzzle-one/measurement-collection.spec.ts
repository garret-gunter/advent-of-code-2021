import { MeasurementCollection } from './measurement-collection';
import { PassThrough, Readable } from 'stream';
import { EOL } from 'os';

describe('MeasurementCollection', () => {
  it('should be defined', () => {
    const input = new PassThrough();

    expect(new MeasurementCollection(() => input)).toBeDefined();
  });

  it('should iterate over the collection', async () => {
    const input = new Readable({
      read(): void {
        return;
      },
    });

    let count = 0;
    const values = [199, 200, 208];
    values.forEach((value) => input.push(value + EOL));
    input.push(null);

    const collection = new MeasurementCollection(() => input);
    const promise = collection.each((line: string) => {
      expect(parseInt(line)).toBe(values[count]);
      count++;
    });

    await new Promise((resolve) => {
      promise.then(() => {
        expect(count).toBe(3);

        resolve(undefined);
      });
    });
  });
});
