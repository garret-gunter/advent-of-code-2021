import { Global, Module } from '@nestjs/common';
import { AssetService } from './asset/asset.service';

@Global()
@Module({
  providers: [AssetService],
  exports: [AssetService],
})
export class UtilModule {}
