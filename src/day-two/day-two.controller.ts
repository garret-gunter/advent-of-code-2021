import { Controller, Get } from '@nestjs/common';
import { InputService } from '~/day-two/input.service';
import { Position } from '~/day-two/position';
import { Navigator } from '~/day-two/navigator';

@Controller('day-two')
export class DayTwoController {
  constructor(private service: InputService) {}

  @Get('part-one')
  count(): Promise<number> {
    const reader = this.service.getInput();
    const navigator = new Navigator(new Position());

    return new Promise((resolve) => {
      void reader
        .each((command) => navigator.move(command))
        .then(() => {
          resolve(navigator.position.multiply());
        });
    });
  }
}
