// src/app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ControlController } from './control/control.controller';
import { ControlService } from './control/control.service';

@Module({
  imports: [HttpModule],
  controllers: [ControlController],
  providers: [ControlService],
})
export class AppModule {}