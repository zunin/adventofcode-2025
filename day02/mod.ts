import { InvalidSerialSummerizer } from "./InvalidSerialSummerizer.ts";
import { RangeParser } from "./RangeParser.ts";

const textinput = Deno.readTextFileSync("day02/input.txt").trim().split(/\n/);

const input = new RangeParser(textinput.join()).parse();

const invalidSerialSummerizer = new InvalidSerialSummerizer(input);
console.log(`If you add up all of the invalid IDs, the sum is ${invalidSerialSummerizer.sum()}`);
console.log(`If you add up all of the invalid IDs with the new silly rule, the sum is ${invalidSerialSummerizer.sumWithSilyRule()}`);


