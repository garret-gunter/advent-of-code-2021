import { Module } from '@nestjs/common';
import { InputService } from './input/input.service';
import { DayTwoController } from './day-two.controller';
import { InterpreterService } from './interpreter/interpreter.service';
import { NavigationService } from './navigation/navigation.service';

@Module({
  providers: [InputService, InterpreterService, NavigationService],
  controllers: [DayTwoController],
})
export class DayTwoModule {}
