import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function validateEnv() {
  const required = [
    'AWS_ACCESS_KEY_ID',
    'AWS_SECRET_ACCESS_KEY',
    'AWS_S3_BUCKET_NAME',
    'AWS_REGION',

    'DB_HOST',
    'DB_PORT',
    'DB_USERNAME',
    'DB_PASSWORD',
    'DB_NAME',
  ] as const;

  required.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(
        `❌ Missing required env var: ${key}. Check your .env file.`,
      );
    }
  });
}

async function bootstrap() {
  validateEnv();

  const PORT = process.env.PORT ?? 7000;
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('api');
  app.enableCors({
    // origin: ['https://audibly-diligent-tayra.cloudpub.ru'],
    // origin: [process.env.CLIENT_DEV_URL],
    // origin: ['http://localhost'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  //   const config = new DocumentBuilder()
  //     .setTitle('Applications API')
  //     .setDescription('API для Морячки')
  //     .setVersion('1.0')
  //     .build();

  //   const document = SwaggerModule.createDocument(app, config);
  //   SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);
  console.log('Server has started on Port: ', PORT);
}
bootstrap();
