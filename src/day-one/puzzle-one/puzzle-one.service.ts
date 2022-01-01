import { Injectable } from '@nestjs/common';
import { MeasurementProcessor } from './measurement-processor';
import { MeasurementCollection } from './measurement-collection';
import { createReadStream } from 'fs';
import { AssetService } from '~/util/asset/asset.service';

@Injectable()
export class PuzzleOneService {
  constructor(private assets: AssetService) {}

  getProcessor(): MeasurementProcessor {
    const collection = new MeasurementCollection(() =>
      createReadStream(this.assets.path('day-one/puzzle-one/input.txt')),
    );

    return new MeasurementProcessor(collection);
  }

  getIncreaseCount(): Promise<number> {
    return this.getProcessor().getIncreaseCount();
  }
}
