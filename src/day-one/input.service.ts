import { Injectable } from '@nestjs/common';
import { AssetService } from '~/util/asset/asset.service';
import { createReadStream } from 'fs';
import { MeasurementCollection } from '~/day-one/measurement-collection';

@Injectable()
export class InputService {
  constructor(private assets: AssetService) {}

  getInput(): MeasurementCollection {
    return new MeasurementCollection(() =>
      createReadStream(this.assets.path('day-one/puzzle-one/input.txt')),
    );
  }
}
