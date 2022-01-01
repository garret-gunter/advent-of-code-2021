import { Test, TestingModule } from '@nestjs/testing';
import { AssetService } from './asset.service';
import { resolve } from 'path';

describe('AssetService', () => {
  let service: AssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetService],
    }).compile();

    service = module.get<AssetService>(AssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should resolve path', () => {
    const assetPath = __dirname + '/../../assets';

    expect(service.path('some-file.txt')).toBe(
      resolve(assetPath + '/some-file.txt'),
    );

    expect(service.path('nested/file/path.js')).toBe(
      resolve(assetPath + '/nested/file/path.js'),
    );
  });
});
