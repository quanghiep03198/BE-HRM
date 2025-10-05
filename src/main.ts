import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Enable CORS
  app.enableCors();

  // Get port from config or use default
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📡 tRPC endpoint: http://localhost:${port}/trpc`);
}

bootstrap();
