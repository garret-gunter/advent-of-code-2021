import { Navigator } from './navigator';
import { Position } from '~/day-two/position';
import { Command, Direction } from '~/day-two/command.interface';
import { CommandReader } from '~/day-two/command-reader';
import { createReadStream } from 'fs';

describe('Navigator', () => {
  it('should be defined', () => {
    const position = new Position();
    expect(new Navigator(position)).toBeDefined();
  });

  it.each([
    [[0, 0], [{ direction: Direction.DOWN, units: 10 }], [0, 10]],
    [[10, 10], [{ direction: Direction.UP, units: 10 }], [10, 0]],
    [[0, 0], [{ direction: Direction.FORWARD, units: 3 }], [3, 0]],
    [[1, 1], [{ direction: Direction.FORWARD, units: 3 }], [4, 1]],
    [
      [0, 0],
      [
        { direction: Direction.FORWARD, units: 3 },
        { direction: Direction.DOWN, units: 10 },
      ],
      [3, 10],
    ],
  ])(
    'should move position',
    (
      initial: Array<number>,
      commands: Array<Command>,
      expected: Array<number>,
    ) => {
      const initialPosition = new Position(initial[0], initial[1]);
      const navigator = new Navigator(initialPosition);

      commands.forEach((command) => navigator.move(command));
      const expectedPosition = new Position(expected[0], expected[1]);

      expect(navigator.position.depth).toBe(expectedPosition.depth);
      expect(navigator.position.horizontal).toBe(expectedPosition.horizontal);
    },
  );

  it('should find process test input', async () => {
    const reader = new CommandReader(() =>
      createReadStream(__dirname + '/test-input.txt'),
    );

    const navigator = new Navigator(new Position());

    await reader
      .each((command) => navigator.move(command))
      .then(() => {
        expect(navigator.position.multiply()).toBe(150);
      });
  });
});
