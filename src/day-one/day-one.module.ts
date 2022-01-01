import { Module } from '@nestjs/common';
import { PuzzleOneModule } from './puzzle-one/puzzle-one.module';

@Module({
  imports: [PuzzleOneModule],
})
export class DayOneModule {}
