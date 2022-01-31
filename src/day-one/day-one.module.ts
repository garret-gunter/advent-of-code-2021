import { Module } from '@nestjs/common';
import { DayOneController } from '~/day-one/day-one.controller';
import { DayOneService } from '~/day-one/day-one.service';
import { InputService } from '~/day-one/input.service';

@Module({
  controllers: [DayOneController],
  providers: [DayOneService, InputService],
})
export class DayOneModule {}
