import { SerialRange } from "./SerialRange.ts";

export class RangeParser {
  parse(): Array<SerialRange> {
    return this.input.split(",").map(range => {
      const [start, end] = range.split("-");
      return new SerialRange(parseInt(start), parseInt(end));
    });
  }
  constructor(private input: string) { }
}
