import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Это включает CORS для всех запросов
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
