import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*', // ideiglenesen bármi, lent felülírjuk
    credentials: true,
  },
})
export class ImageGateway implements OnGatewayInit {
  @WebSocketServer()
  server: Server;

  constructor(private readonly configService: ConfigService) {}

  afterInit(server: Server) {
    const origin = this.configService.get('FRONTEND_ORIGIN') || '*';
    server.engine.opts.cors = {
      origin,
      credentials: true,
    };
    console.log(`✅ WebSocket CORS origin set to: ${origin}`);
  }

  sendImageToClients(imageBuffer: Buffer) {
    this.server.emit('image', imageBuffer);
  }
}
