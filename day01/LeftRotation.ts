import { Rotation } from "./Rotation.ts";

export class LeftRotation implements Rotation {
  constructor(private length: number) {
  }

  rotate(position: number): number {
    const newPosition = position - this.length;
    if (newPosition < 0) {
      return (100 + newPosition) % 100;
    } else if (newPosition === 100) {
      return 0;
    }
    return newPosition;
  }
  
}
