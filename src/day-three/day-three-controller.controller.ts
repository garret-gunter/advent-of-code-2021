import { Controller, Get } from '@nestjs/common';
import { AssetService } from '~/util/asset/asset.service';
import { LineReader } from '~/util/asset/line-reader';
import { ConsumptionCalculator } from '~/day-three/consumption-calculator';
import { BitCounter } from '~/day-three/bit-counter';

@Controller('day-three')
export class DayThreeControllerController {
  constructor(private service: AssetService) {}

  @Get('part-one')
  async powerConsumption(): Promise<number> {
    const reader = LineReader.forFile(this.service.path('day-three/input.txt'));

    const calc = new ConsumptionCalculator(new BitCounter());

    await calc.measureAsync(reader.asIterable());

    return Promise.resolve(calc.consumption);
  }
}
