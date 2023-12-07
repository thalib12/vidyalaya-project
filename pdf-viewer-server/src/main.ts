import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Enabling cors for frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  //Setting post requests ayload size limt to 50MB
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  await app.listen(3001);
}
bootstrap();
