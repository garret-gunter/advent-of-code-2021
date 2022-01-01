import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DayOneModule } from '~/day-one/day-one.module';
import { UtilModule } from './util/util.module';

@Module({
  imports: [DayOneModule, UtilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
