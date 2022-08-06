import { Injectable } from '@nestjs/common';
import { AssetService } from '~/util/asset/asset.service';
import { LineReader } from '~/util/asset/line-reader';

@Injectable()
export class InputService {
  constructor(private assets: AssetService) {}

  getInput(): LineReader {
    return LineReader.forFile(this.assets.path('day-one/input.txt'));
  }
}
