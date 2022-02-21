import { Position } from './position';

describe('Position', () => {
  it('should be defined', () => {
    expect(new Position()).toBeDefined();
  });

  it.each([
    [10, 10, 100],
    [1, 1, 1],
    [2, 2, 4],
    [3, 2, 6],
  ])(
    'should multiply',
    (horizontal: number, depth: number, expected: number) => {
      const position = new Position(horizontal, depth);

      expect(position.multiply()).toBe(expected);
    },
  );
});
