import { Module } from '@nestjs/common';
import { RaceModule } from './race/race.module';

@Module({
  imports: [RaceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
