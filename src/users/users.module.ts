import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserProviders } from './users.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ...UserProviders],
  exports: [UsersService],
})
export class UsersModule {}
