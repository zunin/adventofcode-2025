import { DialPassZeroCounter } from "./DialPassZeroCounter.ts";
import { DialZeroCounter } from "./DialZeroCounter.ts";
import { RotationParser } from "./RotationParser.ts";

const textinput = Deno.readTextFileSync("day01/input.txt").trim().split(/\n/);

const input = new RotationParser(textinput).parse();

const zerosCounter = new DialZeroCounter(input);
console.log(`The actual password to open the door is ${zerosCounter.count()}`);

const passedZeroCounter = new DialPassZeroCounter(input)
console.log(`The password with newer security protocol is ${passedZeroCounter.count()}`);