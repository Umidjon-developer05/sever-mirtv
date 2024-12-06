import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function nest() {
  const app = await NestFactory.create(AppModule);

  // Barcha saytga ruxsat berish
  app.enableCors({ origin: true });

  await app.setGlobalPrefix('api').listen(process.env.PORT || 8080);
}

nest();
