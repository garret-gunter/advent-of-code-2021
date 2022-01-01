import { Module } from '@nestjs/common';
import { PuzzleOneController } from './puzzle-one.controller';
import { PuzzleOneService } from './puzzle-one.service';

@Module({
  controllers: [PuzzleOneController],
  providers: [PuzzleOneService],
})
export class PuzzleOneModule {}
