import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementProcessor } from './measurement-processor';
import { AssetService } from '~/util/asset/asset.service';
import { DayOneService } from '~/day-one/day-one.service';
import { InputService } from '~/day-one/input.service';

describe('DayOneService', () => {
  let service: DayOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayOneService, AssetService, InputService],
    }).compile();

    service = module.get<DayOneService>(DayOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should make a processor', () => {
    expect(service.getProcessor()).toBeInstanceOf(MeasurementProcessor);
  });
});
