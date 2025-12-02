import { RightRotation } from "./RightRotation.ts";
import { LeftRotation } from "./LeftRotation.ts";
import { Rotation } from "./Rotation.ts";

export class RotationParser {
  constructor(private lines: Array<string>) {
  }

  parse(): Array<Rotation> {
    return this.lines.map(line => {
      const length = parseInt(line.replaceAll(/\D/g, ""));
      if (line.startsWith("R")) {
        return new RightRotation(length);
      } else if (line.startsWith("L")) {
        return new LeftRotation(length);
      }
      throw new Error(`Unknown instruction ${line}`);
    });
  }
}
