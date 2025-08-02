import { Injectable } from '@nestjs/common';

@Injectable()
export class ControlService {
  private lastX = 0;
  private lastY = 0;

  setLastCoordinates(x: number, y: number) {
    this.lastX = x;
    this.lastY = y;
  }

  getLastCoordinates() {
    return { x: this.lastX, y: this.lastY };
  }
}
