import { Inject, Injectable } from '@nestjs/common';
import { User_Model } from 'models/User_Model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User_Model,
  ) {}

  async findAll(): Promise<any> {
    const response = this.userRepository.findAll();
    return response;
  }

  async createUser(): Promise<any> {
    const response = this.userRepository.create({
      id: 'usr~423434234',
      name: 'asdas',
      email: 'asdas@gmail.com',
      phone: 13423123213,
      active: true,
    });
    return response;
  }
}
