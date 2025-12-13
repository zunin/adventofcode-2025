import { Powerbank } from "./Powerbank.ts";

export class Joltagesummerizer {
  constructor(private input: Array<Powerbank>) {
  }

  getTotalJoltageOutput(): number {
    return this.input.reduce((sum, powerbank) => sum + powerbank.maximumJoltageFromPair(), 0);
  }
}
