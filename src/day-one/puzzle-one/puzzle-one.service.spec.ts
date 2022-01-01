import { Test, TestingModule } from '@nestjs/testing';
import { PuzzleOneService } from './puzzle-one.service';
import { MeasurementProcessor } from './measurement-processor';
import { AssetService } from '~/util/asset/asset.service';

describe('PuzzleOneService', () => {
  let service: PuzzleOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuzzleOneService, AssetService],
    }).compile();

    service = module.get<PuzzleOneService>(PuzzleOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should make a processor', () => {
    expect(service.getProcessor()).toBeInstanceOf(MeasurementProcessor);
  });
});
