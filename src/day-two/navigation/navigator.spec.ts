import { Navigator } from './navigator';
import { Position } from '~/day-two/navigation/position';
import { CommandReader } from '~/day-two/input/command-reader';
import { createReadStream } from 'fs';
import { SimpleInterpreter } from '~/day-two/interpreter/simple-interpreter';

describe('Navigator', () => {
  it('should be defined', () => {
    const position = new Position();
    expect(new Navigator(position, new SimpleInterpreter())).toBeDefined();
  });

  it('should find process test input', async () => {
    const reader = new CommandReader(() =>
      createReadStream(__dirname + '/test-input.txt'),
    );

    const navigator = new Navigator(new Position(), new SimpleInterpreter());

    await reader
      .each((command) => navigator.move(command))
      .then(() => {
        expect(navigator.position.multiply()).toBe(150);
      });
  });

  it('should have a type', () => {
    const navigator = new Navigator(new Position(), new SimpleInterpreter());
    expect(navigator.type()).toBe(SimpleInterpreter.type);
  });
});
