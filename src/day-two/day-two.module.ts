import { Module } from '@nestjs/common';
import { InputService } from './input.service';
import { DayTwoController } from './day-two.controller';

@Module({
  providers: [InputService],
  controllers: [DayTwoController],
})
export class DayTwoModule {}
