import { CommandInterpreter } from '~/day-two/interpreter/command-interpreter.interface';
import { Command, Direction } from '~/day-two/input/command.interface';
import { Position } from '~/day-two/navigation/position';

export class AimingInterpreter implements CommandInterpreter {
  apply(command: Command, position: Position): Position {
    switch (command.direction) {
      case Direction.DOWN:
        position.aim += command.units;
        break;
      case Direction.UP:
        position.aim -= command.units;
        break;
      case Direction.FORWARD:
        position.horizontal += command.units;
        position.depth += command.units * position.aim;
        break;
    }

    return position;
  }

  static get type(): string {
    return 'AimingInterpreter';
  }

  get type(): string {
    return AimingInterpreter.type;
  }
}
