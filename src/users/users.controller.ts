import { Body, Controller, Get, Post, RawBodyRequest, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTo } from 'Dtos/User_Dto';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('/get-users')
  getAllData(): any {
    return this.userService.findAll();
  }

  @Post('/create-users')
  createUserData(@Body() body: UserDTo): any {
    return this.userService.createUser(body);
  }
}
