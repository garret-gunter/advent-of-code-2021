import { Test, TestingModule } from '@nestjs/testing';
import { AssetService } from '~/util/asset/asset.service';
import { InputService } from './input.service';

describe('InputService', () => {
  let service: InputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputService, AssetService],
    }).compile();

    service = module.get<InputService>(InputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create a measurement collection', () => {
    expect(service.getInput()).toBeDefined();
  });
});
