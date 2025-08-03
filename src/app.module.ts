// src/app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config'; // <-- új
import { ControlController } from './control/control.controller';
import { ControlService } from './control/control.service';

@Module({
<<<<<<< HEAD
  imports: [HttpModule],
  controllers: [ControlController],
  providers: [ControlService],
=======
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // mindenhol elérhető
    }),
  ],
  controllers: [ControlController, ImageController],
  providers: [ControlService, ImageGateway],
>>>>>>> master
})
export class AppModule {}