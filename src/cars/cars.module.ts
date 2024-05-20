import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsProviders } from './cars.provider';

@Module({
  controllers: [CarsController],
  providers: [CarsService, ...CarsProviders],
  exports: [CarsService],
})
export class CarsModule {}
