import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getAllData(): string {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): string {
        return 'This action returns one post';
    }
}
