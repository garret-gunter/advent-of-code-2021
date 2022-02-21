import { Test, TestingModule } from '@nestjs/testing';
import { DayTwoController } from './day-two.controller';
import { InputService } from '~/day-two/input/input.service';
import { AssetService } from '~/util/asset/asset.service';
import { UtilModule } from '~/util/util.module';
import { NavigationService } from '~/day-two/navigation/navigation.service';
import { InterpreterService } from '~/day-two/interpreter/interpreter.service';

describe('DayTwoController', () => {
  let controller: DayTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule],
      controllers: [DayTwoController],
      providers: [
        InputService,
        AssetService,
        NavigationService,
        InterpreterService,
      ],
    }).compile();

    controller = module.get<DayTwoController>(DayTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
