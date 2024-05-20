import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { databaseProviders as DatabaseProviders } from 'providers/database.provider';
import { ConfigModule } from '@nestjs/config';
import { CarsModule } from './cars/cars.module';

ConfigModule.forRoot()

@Module({
  imports: [UsersModule, CarsModule],
  controllers: [AppController],
  providers: [AppService, ...DatabaseProviders],
})
export class AppModule { }
