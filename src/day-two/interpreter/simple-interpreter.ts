import { CommandInterpreter } from '~/day-two/interpreter/command-interpreter.interface';
import { Command, Direction } from '~/day-two/input/command.interface';
import { Position } from '~/day-two/navigation/position';

export class SimpleInterpreter implements CommandInterpreter {
  apply(command: Command, position: Position): Position {
    switch (command.direction) {
      case Direction.DOWN:
        position.depth += command.units;
        break;
      case Direction.UP:
        position.depth -= command.units;
        break;
      case Direction.FORWARD:
        position.horizontal += command.units;
        break;
    }

    return position;
  }

  static get type(): string {
    return 'SimpleInterpreter';
  }

  get type(): string {
    return SimpleInterpreter.type;
  }
}
