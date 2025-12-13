import { PaperRollGridParser } from "./PaperRollGridParser.ts";

const textinput = Deno.readTextFileSync("day04/input.txt");

const parser = new PaperRollGridParser(textinput);
const grid = parser.getGrid();

console.log(`${grid.countAccessiblePaperRolls()} rolls of paper can be accessed by a forklift`)