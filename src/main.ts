import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  

app.enableCors({
  origin: '*', // VAGY pontosabban: ['http://192.168.1.123:5173']
  methods: ['GET', 'POST'],
});
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
