import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users/get-users')
  getAllData(): any {
    return this.userService.findAll();
  }

  @Get('/users/create-users')
  createUserData(): any {
    return this.userService.createUser();
  }
}
