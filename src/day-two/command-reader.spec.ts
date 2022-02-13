import { CommandReader } from './command-reader';
import { PassThrough, Readable } from 'stream';
import { EOL } from 'os';
import { Command, Direction } from '~/day-two/command.interface';

describe('CommandReader', () => {
  it('should be defined', () => {
    const input = new PassThrough();

    expect(new CommandReader(() => input)).toBeDefined();
  });

  it('should iterate over the collection', async () => {
    const input = new Readable({
      read(): void {
        return;
      },
    });

    let count = 0;
    const values = [
      { direction: Direction.DOWN, units: 199 },
      { direction: Direction.FORWARD, units: 130 },
      { direction: Direction.UP, units: 2 },
    ];
    values.forEach((value) =>
      input.push(`${value.direction} ${value.units}${EOL}`),
    );
    input.push(null);

    const reader = new CommandReader(() => input);
    const promise = reader.each((command: Command) => {
      expect(command.direction).toBe(values[count].direction);
      expect(command.units).toBe(values[count].units);
      count++;
    });

    await new Promise((resolve) => {
      void promise.then(() => {
        expect(count).toBe(3);

        resolve(undefined);
      });
    });
  });
});
