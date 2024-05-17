import { Inject, Injectable, RawBodyRequest, Req } from '@nestjs/common';
import { UserDTo } from 'Dtos/User_Dto';
import { User_Model } from 'models/User_Model';
import * as uid from 'uuid'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User_Model,
  ) { }

  // --------------------> Get Users 

  async findAll(): Promise<any> {
    const response = this.userRepository.findAll({});
    return response;
  }

  // --------------------> Create Users

  async createUser(body: UserDTo): Promise<any> {
    const payload = {
      id: `usr~${uid.v4()}`,
      active: true,
      ...body
    }
    const response = this.userRepository.create(payload)
    return response
  }
}
