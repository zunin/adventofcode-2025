import { Dial } from "./Dial.ts";
import { Rotation } from "./Rotation.ts";

export class DialZeroCounter {
  count(): number {
    let zeros = 0;
    this.rotations.forEach(rotation => {
      this.dial.rotate(rotation);
      if (this.dial.readPosition() === 0) {
        zeros += 1;
      }
    });
    return zeros;
  }

  private dial: Dial
  constructor(private rotations: Array<Rotation>) {
    this.dial = new Dial();
  }
}

