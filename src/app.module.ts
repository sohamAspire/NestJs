import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { databaseProviders as DatabaseProviders } from 'providers/database.provider';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, ...DatabaseProviders],
})
export class AppModule { }
