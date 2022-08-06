import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DayOneModule } from '~/day-one/day-one.module';
import { UtilModule } from './util/util.module';
import { DayTwoModule } from './day-two/day-two.module';
import { DayThreeModule } from './day-three/day-three.module';

@Module({
  imports: [DayOneModule, UtilModule, DayTwoModule, DayThreeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
