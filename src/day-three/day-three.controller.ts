import { Controller, Get } from '@nestjs/common';
import { AssetService } from '~/util/asset/asset.service';
import { LineReader } from '~/util/asset/line-reader';
import { ConsumptionCalculator } from '~/day-three/consumption-calculator';
import { BitCounter } from '~/day-three/bit-counter';
import { LifeSupportCalculator } from '~/day-three/life-support-calculator';

@Controller('day-three')
export class DayThreeController {
  constructor(private service: AssetService) {}

  @Get('part-one')
  async partOne(): Promise<number> {
    const bitCounter = new BitCounter();
    const calc = new ConsumptionCalculator(bitCounter);
    await calc.measureAsync(this.readInput().toAsyncIterable());

    return Promise.resolve(calc.consumption);
  }

  @Get('part-two')
  async partTwo(): Promise<number> {
    return new Promise((resolve) => {
      void this.readInput()
        .toArray()
        .then((lines) => {
          const bitCounter = new BitCounter();
          const calc = new LifeSupportCalculator(bitCounter);

          resolve(calc.getLifeSupportRating(lines));
        });
    });
  }

  private readInput(): LineReader {
    return LineReader.forFile(this.service.path('day-three/input.txt'));
  }
}
