// src/app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config'; // <-- új
import { ControlController } from './control/control.controller';
import { ControlService } from './control/control.service';
import { ImageGateway } from './image/image.gateway';
import { ImageController } from './image/image.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // mindenhol elérhető
    }),
  ],
  controllers: [ControlController, ImageController],
  providers: [ControlService, ImageGateway],
})
export class AppModule {}