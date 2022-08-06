import { Command, Direction } from '~/day-two/input/command.interface';
import { LineReader } from '~/util/asset/line-reader';

export class CommandReader {
  constructor(private provider: () => LineReader) {}

  async each(callback: (command: Command) => void): Promise<void> {
    return this.provider().each((line) =>
      CommandReader.readLine(line, callback),
    );
  }

  private static readLine(line: string, callback: (command: Command) => void) {
    const split = line.split(' ');

    if (split.length !== 2) {
      throw new Error('Invalid command line: ' + line);
    }

    let direction: Direction;

    // Validate the direction.
    switch (split[0]) {
      case Direction.UP:
      case Direction.DOWN:
      case Direction.FORWARD:
        direction = split[0];
        break;
      default:
        throw new Error('Invalid direction in command line: ' + line);
    }

    callback({
      direction: direction,
      units: parseInt(split[1]),
    });
  }
}
