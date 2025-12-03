import { SerialRange } from "./SerialRange.ts";

export class InvalidSerialSummerizer {
  constructor(private serialRanges: Array<SerialRange>) {
  }

  sum(): number {
    return this.serialRanges.reduce((sum, range) => {
      return sum + range.getInvalidSerials().reduce((serialSum, serial) => serialSum + serial.getSerial(), 0);
    }, 0);
  }
}
