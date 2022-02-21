import { Controller, Get } from '@nestjs/common';
import { InputService } from '~/day-two/input/input.service';
import { NavigationService } from '~/day-two/navigation/navigation.service';

@Controller('day-two')
export class DayTwoController {
  constructor(
    private service: InputService,
    private navigation: NavigationService,
  ) {}

  @Get('part-one')
  simple(): Promise<number> {
    const reader = this.service.getInput();
    const navigator = this.navigation.simple();

    return new Promise((resolve) => {
      void reader
        .each((command) => navigator.move(command))
        .then(() => {
          resolve(navigator.position.multiply());
        });
    });
  }

  @Get('part-two')
  aiming(): Promise<number> {
    const reader = this.service.getInput();
    const navigator = this.navigation.aiming();

    return new Promise((resolve) => {
      void reader
        .each((command) => navigator.move(command))
        .then(() => {
          resolve(navigator.position.multiply());
        });
    });
  }
}
