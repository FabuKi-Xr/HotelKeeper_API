import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, // ให้ไอพวกที่ไม่เกี่ยวข้องไม่ต้องเข้ามา
    transform:true
  }))
  const config = new DocumentBuilder()
  .setTitle('testApi')
  .setDescription('The house keeper API')
  .setVersion('1.0')
  .addTag('api')
  .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
