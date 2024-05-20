import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CarDTo } from 'Dtos/Car_Dto';
import { Car_Model } from 'models/Car_Model';
import * as uid from 'uuid'

@Injectable()
export class CarsService {
  constructor(
    @Inject('CARS_REPOSITORY')
    private carRespository: typeof Car_Model,
  ) { }

  // --------------------> Get Cars 

  async findAll(): Promise<any> {
    const response = this.carRespository.findAll({});
    return response;
  }

  // --------------------> Create Cars

  async createCar(body: CarDTo): Promise<any> {
    try {
      const payload = { id: `car~${uid.v4()}`, active: true, ...body }
      const response = await this.carRespository.create(payload)
      return response
    } catch (error) {
      throw new HttpException(error.errors || 'Something Went Wrong', HttpStatus.BAD_REQUEST);
    }
  }
}
