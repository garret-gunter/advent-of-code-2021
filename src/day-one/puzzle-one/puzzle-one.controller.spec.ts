import { Test, TestingModule } from '@nestjs/testing';
import { PuzzleOneController } from './puzzle-one.controller';
import { PuzzleOneService } from '~/day-one/puzzle-one/puzzle-one.service';
import { UtilModule } from '~/util/util.module';

describe('PuzzleOneController', () => {
  let controller: PuzzleOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule],
      controllers: [PuzzleOneController],
      providers: [PuzzleOneService],
    }).compile();

    controller = module.get<PuzzleOneController>(PuzzleOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
