import { Controller, Get } from '@nestjs/common';
import { PuzzleOneService } from './puzzle-one.service';

@Controller('puzzle-one')
export class PuzzleOneController {
  constructor(private service: PuzzleOneService) {}

  @Get()
  answer(): Promise<number> {
    return this.service.getIncreaseCount();
  }
}
