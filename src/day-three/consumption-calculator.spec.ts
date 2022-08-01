import { ConsumptionCalculator } from './consumption-calculator';
import { BitCounter } from './bit-counter';
import { LineReader } from '~/util/asset/line-reader';

describe('ConsumptionCalculator', () => {
  it('should be defined', () => {
    expect(new ConsumptionCalculator(new BitCounter())).toBeDefined();
  });

  const measureAsync = (): Promise<ConsumptionCalculator> => {
    const reader: LineReader = LineReader.forFile(
      __dirname + '/test-input.txt',
    );
    const items: AsyncIterable<string> = reader.asIterable();
    const calc = new ConsumptionCalculator(new BitCounter());

    return new Promise((resolve) => {
      void calc.measureAsync(items).then(() => {
        resolve(calc);
      });
    });
  };

  const measure = (): Promise<ConsumptionCalculator> => {
    const reader: LineReader = LineReader.forFile(
      __dirname + '/test-input.txt',
    );
    const items: Array<string> = [];
    const calc = new ConsumptionCalculator(new BitCounter());

    return new Promise((resolve) => {
      void reader
        .each((line: string) => items.push(line))
        .then(() => {
          calc.measure(items);
          resolve(calc);
        });
    });
  };

  it('should measure', async () => {
    await measure().then((calc) => {
      expect(calc.gamma).toBe(22);
      expect(calc.epsilon).toBe(9);
      expect(calc.consumption).toBe(198);
    });
  });

  it('should measure asynchronously', async () => {
    await measureAsync().then((calc) => {
      expect(calc.gamma).toBe(22);
      expect(calc.epsilon).toBe(9);
      expect(calc.consumption).toBe(198);
    });
  });

  it('should measure gamma rate', async () => {
    await measureAsync().then((calculator: ConsumptionCalculator) => {
      expect(calculator.gamma).toBe(22);
    });
  });

  it('should measure epsilon rate', async () => {
    await measureAsync().then((calculator: ConsumptionCalculator) => {
      expect(calculator.epsilon).toBe(9);
    });
  });

  it('should calculate consumption', async () => {
    await measureAsync().then((calculator: ConsumptionCalculator) => {
      expect(calculator.consumption).toBe(198);
    });
  });
});
