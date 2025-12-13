import { Joltagesummerizer } from "./Joltagesummerizer.ts";
import { OverrideJoltagesummerizer } from "./OverrideJoltagesummerizer.ts";
import { PowerBankParser } from "./PowerBankParser.ts";

const textinput = Deno.readTextFileSync("day03/input.txt");

const parser = new PowerBankParser(textinput);
const input = parser.parse();

const summerizer = new Joltagesummerizer(input);
console.log(`The total output joltage is ${summerizer.getTotalJoltageOutput()}`)

const overrideJoltagesummerizer = new OverrideJoltagesummerizer(input);
console.log(`The total output joltage after the override is ${overrideJoltagesummerizer.getTotalJoltageOutput()}`)