import { MeasurementWindow } from './measurement-window';

describe('MeasurementWindow', () => {
  it('should be defined', () => {
    expect(new MeasurementWindow(1)).toBeDefined();
  });

  it('should calculate length', () => {
    const win = new MeasurementWindow(10);

    expect(win.length).toEqual(0);

    for (let i = 0; i < 10; i++) {
      expect(win.length).toEqual(i);
      win.push(i);
    }
  });

  it.each([[1], [2], [3], [4], [5]])(
    `should limit length to $a`,
    (curLen: number) => {
      const win = new MeasurementWindow(curLen);

      win.push(1);
      expect(win.length).toBeGreaterThan(0);

      for (let i = 0; i < curLen; i++) {
        win.push(i);
        expect(win.length).toBeLessThanOrEqual(curLen);
      }

      for (let i = 0; i < 2; i++) {
        win.push(i);
        expect(win.length).toEqual(curLen);
      }
    },
  );

  it.each([
    [[1, 2, 3], 3, 6],
    [[1], 1, 1],
    [[], 1, 0],
    [[3, 3, 3], 2, 6],
    [[1, 1, 1], 1, 1],
  ])(
    `it should sum the elements`,
    (elements: Array<number>, length: number, expected: number) => {
      const win = new MeasurementWindow(length);
      elements.forEach((value) => win.push(value));
      expect(win.sum).toBe(expected);
    },
  );

  it('should require a positive length', () => {
    expect(function () {
      new MeasurementWindow(-1);
    }).toThrowError(TypeError);
  });
});
