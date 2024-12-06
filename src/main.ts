import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function nest() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://www.mirtv.uz', 'http://5.182.26.16'], // CORS uchun IP-manzilni va domenni qo‘shdik
  });

  await app.setGlobalPrefix('api').listen(process.env.PORT || 8080);
}

nest();
