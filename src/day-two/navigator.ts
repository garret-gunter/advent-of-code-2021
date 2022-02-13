import { Position } from '~/day-two/position';
import { Command, Direction } from '~/day-two/command.interface';

export class Navigator {
  position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  move(command: Command): void {
    switch (command.direction) {
      case Direction.DOWN:
        this.position.depth += command.units;
        break;
      case Direction.UP:
        this.position.depth -= command.units;
        break;
      case Direction.FORWARD:
        this.position.horizontal += command.units;
        break;
    }
  }
}
