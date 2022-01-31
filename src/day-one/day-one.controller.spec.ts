import { Test, TestingModule } from '@nestjs/testing';
import { DayOneController } from './day-one.controller';
import { UtilModule } from '~/util/util.module';
import { DayOneService } from '~/day-one/day-one.service';
import { InputService } from '~/day-one/input.service';
import { AssetService } from '~/util/asset/asset.service';

describe('DayOneController', () => {
  let controller: DayOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule],
      controllers: [DayOneController],
      providers: [DayOneService, InputService, AssetService],
    }).compile();

    controller = module.get<DayOneController>(DayOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
