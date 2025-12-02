import { Rotation } from "./Rotation.ts";

export class Dial {
  getTimesPastZero(): number {
    return this.timesPassedZero;
  }
  private position: number;
  private timesPassedZero: number;
  constructor() {
    this.position = 50;
    this.timesPassedZero = 0;
  }

  rotate(rotation: Rotation) {
    this.position = rotation.rotate(this.position);
  }

  readPosition(): number {
    return this.position;
  }
}
