import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function nest() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'https://mir-tv.vercel.app' });
  await app.setGlobalPrefix('api').listen(process.env.PORT || 8080);
}
nest();
