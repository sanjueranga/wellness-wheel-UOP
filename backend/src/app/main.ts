import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import * as session from 'express-session';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const port = process.env['PORT'] ?? 3333;
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  app.use(
    session({
      secret: process.env['SECRET'],
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`🚀 server started on http://localhost:${port}`);
}
bootstrap();
