import { Injectable } from '@nestjs/common';

@Injectable()
export class ControlService {
  private lastX = 0;
  private lastY = 0;
  private lastZ = 50;

  setLastCoordinates(x: number, y: number) {
    this.lastX = x;
    this.lastY = y;
  }

  setZCoordinate(z: number) {
    this.lastZ = z;
  }

  getLastCoordinates() {
    return { x: this.lastX, y: this.lastY , z: this.lastZ };
  }
}
