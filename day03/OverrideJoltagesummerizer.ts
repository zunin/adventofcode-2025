import { Powerbank } from "./Powerbank.ts";

export class OverrideJoltagesummerizer {
  constructor(private input: Array<Powerbank>) {
  }

  getTotalJoltageOutput(): number {
    return this.input.reduce((sum, powerbank) => sum + powerbank.maximumJoltageWithSafetyOverride(), 0);
  }
}
