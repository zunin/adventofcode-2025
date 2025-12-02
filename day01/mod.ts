import { DialZeroCounter } from "./RotationCounter.ts";
import { RotationParser } from "./RotationParser.ts";

const textinput = Deno.readTextFileSync("day01/input.txt").trim().split(/\n/);

const input = new RotationParser(textinput).parse();

const rotationCounter = new DialZeroCounter(input);
console.log(`The actual password to open the door is ${rotationCounter.count()}`);
