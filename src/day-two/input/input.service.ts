import { Injectable } from '@nestjs/common';
import { AssetService } from '~/util/asset/asset.service';
import { CommandReader } from '~/day-two/input/command-reader';
import { LineReader } from '~/util/asset/line-reader';

@Injectable()
export class InputService {
  constructor(private assets: AssetService) {}

  getInput(): CommandReader {
    return new CommandReader(() =>
      LineReader.forFile(this.assets.path('day-two/input.txt')),
    );
  }
}
