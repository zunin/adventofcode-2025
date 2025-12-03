import { Rotation } from "./Rotation.ts";

export class RightRotation implements Rotation {
    private numberOfZeroPassed: number;
  constructor(private length: number) {
    this.numberOfZeroPassed = 0;
  }
  timesPassedZero(position: number): number {
    const allPositions = this.getAllPositions(position);
    return allPositions.filter(p => p === 0).length;
  }
  rotate(position: number): number {
    const allPositions = this.getAllPositions(position);
    return allPositions[allPositions.length - 1];
  }

private getAllPositions(position: number) {
  return [...Array(this.length).keys()]
  .map(index => index + 1)
  .map((index) => {
    const newPosition = (position + index) % 100;
    if (newPosition % 100 === 0) {
      return (newPosition % 100);
    } else if (newPosition === 100) {
      return 0;
    }
    return newPosition;
  });
}
}
