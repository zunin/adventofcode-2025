import { Serial } from "./Serial.ts";

export class SerialRange {
  private serials: Array<Serial>;
  constructor(private from: number, private to: number) {
    this.serials = [...Array(to - from + 1).keys()].map(index => index + from).map(index => {
      return new Serial(index);
    });
  }

  getSerials(): Array<Serial> {
    return this.serials;
  }

  getInvalidSerials(): Array<Serial> {
    return this.serials.filter(x => !x.isValid());
  }

  getInvalidSerialsWithExtraSillyRule(): Array<Serial> {
    return this.serials.filter(x => !x.isValidWithExtraSillyRule());
  }
}
