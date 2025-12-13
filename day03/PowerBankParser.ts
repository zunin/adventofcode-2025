import { Powerbank } from "./Powerbank.ts";

export class PowerBankParser {
  constructor(private input: string) { }

  parse(): Array<Powerbank> {
    return this.input
      .split(/\n/)
      .map(line => line.trim())
      .filter(line => !!line)
      .map(line => new Powerbank(line));
  }
}
