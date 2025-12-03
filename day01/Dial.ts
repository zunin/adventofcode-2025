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
    const nextRotation = rotation.rotate(this.position);
    this.timesPassedZero += rotation.timesPassedZero(this.position);
    this.position = nextRotation;
  }

  getTimesPassedZero(): number {
    return this.timesPassedZero;
  }

  readPosition(): number {
    return this.position;
  }
}
