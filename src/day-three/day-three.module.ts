import { Module } from '@nestjs/common';
import { DayThreeController } from './day-three.controller';

@Module({
  controllers: [DayThreeController],
})
export class DayThreeModule {}
