import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips properties that are not defined in the DTO
      forbidNonWhitelisted: true, // throws an error if unknown properties are passed
      transform: true, // automatically transforms query params into the expected types
    }),
  );
  await app.listen(4000);
}
bootstrap();
