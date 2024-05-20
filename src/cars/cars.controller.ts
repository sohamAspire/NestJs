import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDTo } from 'Dtos/Car_Dto';

@Controller()
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Get('/get-cars')
  getAllData(): any {
    return this.carsService.findAll();
  }

  @Post('/create-cars')
  createUserData(@Body() body: CarDTo): any {
    return this.carsService.createCar(body);
  }
}
