import { Readable } from 'stream';
import { createInterface } from 'readline';
import { once } from 'events';
import { Command, Direction } from '~/day-two/input/command.interface';

export class CommandReader {
  constructor(private provider: () => Readable) {}

  async each(callback: (command: Command) => void): Promise<void> {
    const stream = this.provider();
    const rl = createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    stream.on('close', () => {
      rl.close();
    });

    rl.on('line', (line) => {
      CommandReader.readLine(line, callback);
    });

    await once(rl, 'close');
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
