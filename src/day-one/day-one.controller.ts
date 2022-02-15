import { Controller, Get } from '@nestjs/common';
import { DayOneService } from '~/day-one/day-one.service';

@Controller('day-one')
export class DayOneController {
  constructor(private service: DayOneService) {}

  @Get('part-one')
  count(): Promise<number> {





    
    return this.service.getProcessor().getIncreaseCount();
  }

  @Get('part-two')
  countByWindow(): Promise<number> {
    return this.service.getProcessor().getIncreaseCountByWindow(3);
  }
}
