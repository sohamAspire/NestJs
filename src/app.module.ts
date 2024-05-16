import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@nestjs/core';
import { databaseProviders as DatabaseProviders } from 'providers/database.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...DatabaseProviders],
})
export class AppModule { }
