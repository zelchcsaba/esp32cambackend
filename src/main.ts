import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import * as http from 'http';
import { initWebSocketServer } from './websocket.gateway';
import { ControlService } from './control/control.service';
=======
import { ConfigService } from '@nestjs/config';
>>>>>>> master

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST'],
  });

  // Létrehozunk egy HTTP szervert, amit mind a NestJS, mind a WebSocket használ
  const httpServer = http.createServer(app.getHttpAdapter().getInstance());

  const controlService = app.get(ControlService);

  await app.init(); // fontos, hogy előbb init, és utána listen

  httpServer.listen(3000, '0.0.0.0', () => {
    console.log('🚀 HTTP + WS szerver fut a http://<IP>:3000 címen');

  // Indítjuk a WebSocket szervert a megfelelő HTTP szerverrel
  initWebSocketServer(httpServer, controlService);
  });
=======
  const configService = app.get(ConfigService);
  const origin = configService.get<string>('FRONTEND_ORIGIN') || '*';

  app.enableCors({
    origin,
    methods: ['GET', 'POST'],
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
>>>>>>> master
}
bootstrap();