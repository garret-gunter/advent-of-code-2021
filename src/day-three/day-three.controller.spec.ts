import { Test, TestingModule } from '@nestjs/testing';
import { DayThreeController } from './day-three.controller';
import { AssetService } from '~/util/asset/asset.service';
import { UtilModule } from '~/util/util.module';

describe('DayThreeController', () => {
  let controller: DayThreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule],
      controllers: [DayThreeController],
      providers: [AssetService],
    }).compile();

    controller = module.get<DayThreeController>(DayThreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
