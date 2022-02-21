import { Command } from '~/day-two/input/command.interface';
import { Position } from '~/day-two/navigation/position';

export interface CommandInterpreter {
  readonly type: string;

  apply(command: Command, position: Position): Position;
}
