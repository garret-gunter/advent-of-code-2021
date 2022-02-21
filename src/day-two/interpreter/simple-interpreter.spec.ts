import { SimpleInterpreter } from './simple-interpreter';
import { Command, Direction } from '~/day-two/input/command.interface';
import { Position } from '~/day-two/navigation/position';

describe('SimpleInterpreter', () => {
  it('should be defined', () => {
    expect(new SimpleInterpreter()).toBeDefined();
  });

  it('should have type', () => {
    expect(new SimpleInterpreter().type).toBeDefined();
    expect(new SimpleInterpreter().type).toBe(SimpleInterpreter.type);
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
      const position = new Position(initial[0], initial[1]);
      const interpreter = new SimpleInterpreter();

      commands.forEach((command) => interpreter.apply(command, position));
      const expectedPosition = new Position(expected[0], expected[1]);

      expect(position.depth).toBe(expectedPosition.depth);
      expect(position.horizontal).toBe(expectedPosition.horizontal);
    },
  );
});
