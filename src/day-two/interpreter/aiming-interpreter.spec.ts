import { AimingInterpreter } from './aiming-interpreter';
import { Command, Direction } from '~/day-two/input/command.interface';
import { Position } from '~/day-two/navigation/position';

describe('AimingInterpreter', () => {
  it('should be defined', () => {
    expect(new AimingInterpreter()).toBeDefined();
  });

  it('should have type', () => {
    expect(new AimingInterpreter().type).toBeDefined();
    expect(new AimingInterpreter().type).toBe(AimingInterpreter.type);
  });

  it.each([
    [[0, 0, 0], [{ direction: Direction.DOWN, units: 10 }], [0, 0, 10]],
    [[10, 10, 0], [{ direction: Direction.UP, units: 10 }], [10, 10, -10]],
    [[0, 0, 0], [{ direction: Direction.FORWARD, units: 3 }], [3, 0, 0]],
    [[1, 1, 1], [{ direction: Direction.FORWARD, units: 3 }], [4, 4, 3]],
    [
      [0, 0, 0],
      [
        { direction: Direction.FORWARD, units: 3 },
        { direction: Direction.DOWN, units: 10 },
        { direction: Direction.FORWARD, units: 3 },
      ],
      [6, 30, 10],
    ],
  ])(
    'should move position',
    (
      initial: Array<number>,
      commands: Array<Command>,
      expected: Array<number>,
    ) => {
      const position = new Position(initial[0], initial[1], initial[2]);
      const interpreter = new AimingInterpreter();

      commands.forEach((command) => interpreter.apply(command, position));
      const expectedPosition = new Position(
        expected[0],
        expected[1],
        expected[2],
      );

      expect(position.depth).toBe(expectedPosition.depth);
      expect(position.horizontal).toBe(expectedPosition.horizontal);
      expect(position.aim).toBe(expectedPosition.aim);
    },
  );
});
