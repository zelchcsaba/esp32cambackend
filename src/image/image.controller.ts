// src/image.controller.ts
import {
  Controller,
  Post,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { ImageGateway } from './image.gateway';

@Controller('camera')
export class ImageController {
  constructor(private readonly imageGateway: ImageGateway) {}

  @Post('upload')
  @HttpCode(HttpStatus.OK)
  async uploadImage(@Req() req: Request) {

    // req.body itt a raw Buffer lesz
    const chunks: Buffer[] = [];

    return new Promise((resolve, reject) => {
      req.on('data', (chunk) => {
        chunks.push(chunk);
      });
      req.on('end', () => {
        const imageBuffer = Buffer.concat(chunks);
        // továbbküldjük WebSocket kliensnek
        this.imageGateway.sendImageToClients(imageBuffer);
        resolve({ status: 'ok' });
      });
      req.on('error', (err) => {
      console.error('Hiba a kérés fogadása közben:', err);
      reject(err);
    });
    });
  }
}
