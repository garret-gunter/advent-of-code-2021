import { Injectable } from '@nestjs/common';
import { InputService } from '~/day-one/input.service';
import { MeasurementProcessor } from '~/day-one/measurement-processor';

@Injectable()
export class DayOneService {
  constructor(private input: InputService) {}

  getProcessor(): MeasurementProcessor {
    return new MeasurementProcessor(this.input.getInput());
  }
}
