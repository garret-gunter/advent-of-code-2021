import { Module } from '@nestjs/common';
import { DayThreeControllerController } from './day-three-controller.controller';

@Module({
  controllers: [DayThreeControllerController],
})
export class DayThreeModule {}
