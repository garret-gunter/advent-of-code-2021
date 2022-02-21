import { Injectable } from '@nestjs/common';
import { AssetService } from '~/util/asset/asset.service';
import { createReadStream } from 'fs';
import { CommandReader } from '~/day-two/input/command-reader';

@Injectable()
export class InputService {
  constructor(private assets: AssetService) {}

  getInput(): CommandReader {
    return new CommandReader(() =>
      createReadStream(this.assets.path('day-two/input.txt')),
    );
  }
}
