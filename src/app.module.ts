import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DayOneModule } from './day-one/day-one.module';

@Module({
  imports: [DayOneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
