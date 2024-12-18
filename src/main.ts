import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function nest() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: ['https://mir-tv.vercel.app', 'https://www.mirtv.uz'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});
  await app.setGlobalPrefix('api').listen(process.env.PORT || 8080);
}
nest();
