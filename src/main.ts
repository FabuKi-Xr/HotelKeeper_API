import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({
   // whitelist : true // ให้ไอพวกที่ไม่เกี่ยวข้องไม่ต้องเข้ามา
  }))
  await app.listen(3000);
}
bootstrap();
