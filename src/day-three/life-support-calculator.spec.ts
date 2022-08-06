import { BitCounter } from './bit-counter';
import { LineReader } from '~/util/asset/line-reader';
import { LifeSupportCalculator } from '~/day-three/life-support-calculator';

describe('LifeSupportCalculator', () => {
  const readFile = () => {
    const reader: LineReader = LineReader.forFile(
      __dirname + '/test-input.txt',
    );

    return reader.toArray();
  };

  it('should be defined', () => {
    expect(new LifeSupportCalculator(new BitCounter())).toBeDefined();
  });

  it('should calculate oxygen rating', async () => {
    return readFile().then((lines) => {
      const calc = new LifeSupportCalculator(new BitCounter());
      expect(calc.getOxygenRating(lines)).toBe(23);
    });
  });

  it('should calculate CO2 rating', async () => {
    return readFile().then((lines) => {
      const calc = new LifeSupportCalculator(new BitCounter());
      expect(calc.getCO2Rating(lines)).toBe(10);
    });
  });

  it('should calculate life support rating', async () => {
    return readFile().then((lines) => {
      const calc = new LifeSupportCalculator(new BitCounter());
      expect(calc.getLifeSupportRating(lines)).toBe(230);
    });
  });
});
