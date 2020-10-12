import { NestFactory } from '@nestjs/core';
import { AppModule, CustomExceptionFilter } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new CustomExceptionFilter());
  await app.listen(3000);
}
bootstrap();
