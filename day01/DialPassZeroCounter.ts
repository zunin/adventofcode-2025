import { Dial } from "./Dial.ts";
import { Rotation } from "./Rotation.ts";

export class DialPassZeroCounter {
  count(): number {
    this.rotations.forEach(rotation => {
      this.dial.rotate(rotation);
    });
    return this.dial.getTimesPassedZero();
  }

  private dial: Dial
  constructor(private rotations: Array<Rotation>) {
    this.dial = new Dial();
  }
}

