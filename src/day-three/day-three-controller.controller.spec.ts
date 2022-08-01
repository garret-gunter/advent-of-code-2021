import { Test, TestingModule } from '@nestjs/testing';
import { DayThreeControllerController } from './day-three-controller.controller';
import { AssetService } from '~/util/asset/asset.service';
import { UtilModule } from '~/util/util.module';

describe('DayThreeControllerController', () => {
  let controller: DayThreeControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule],
      controllers: [DayThreeControllerController],
      providers: [AssetService],
    }).compile();

    controller = module.get<DayThreeControllerController>(
      DayThreeControllerController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
