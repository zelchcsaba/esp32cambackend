import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5173',
    credentials: true,
  },
})
export class ImageGateway {
  @WebSocketServer()
  server: Server;

  sendImageToClients(imageBuffer: Buffer) {
    // Itt 'image' nevű eseményként küldjük az adatot
    this.server.emit('image', imageBuffer);
  }
}
