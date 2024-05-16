import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api', AppController)
  await app.listen(3000);
}
bootstrap();
