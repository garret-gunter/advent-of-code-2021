import { Position } from '~/day-two/navigation/position';
import { Command } from '~/day-two/input/command.interface';
import { CommandInterpreter } from '~/day-two/interpreter/command-interpreter.interface';

export class Navigator {
  position: Position;
  private interpreter: CommandInterpreter;

  constructor(position: Position, interpreter: CommandInterpreter) {
    this.position = position;
    this.interpreter = interpreter;
  }

  move(command: Command): void {
    this.interpreter.apply(command, this.position);
  }

  type() {
    return this.interpreter.type;
  }
}
