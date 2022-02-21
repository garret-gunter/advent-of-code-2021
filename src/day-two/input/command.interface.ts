export enum Direction {
  FORWARD = 'forward',
  DOWN = 'down',
  UP = 'up',
}

export interface Command {
  direction: Direction;
  units: number;
}
