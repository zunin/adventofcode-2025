import { assertEquals } from "@std/assert/equals";
import { PaperRollGridParser } from "./PaperRollGridParser.ts";

function trimIndentationAndEmptyLines(input: string) {
  return input.replaceAll(/([ ])*/g, '').trim(); // remove extra indentation and lines that makes it easier to read
}

const exampleDiagram = trimIndentationAndEmptyLines(`
    ..@@.@@@@.
    @@@.@.@.@@
    @@@@@.@.@@
    @.@@@@..@.
    @@.@@@@.@@
    .@@@@@@@.@
    .@.@.@.@@@
    @.@@@.@@@@
    .@@@@@@@@.
    @.@.@@@.@.
`);


Deno.test("Grid can recreate output", () => {
  const parser = new PaperRollGridParser(exampleDiagram);
  const grid = parser.getGrid();
  assertEquals(exampleDiagram, grid.getDiagram());
});

Deno.test("Grid can mark accessible paper rolls", () => {
  const parser = new PaperRollGridParser(exampleDiagram);
  const grid = parser.getGrid();
  assertEquals(trimIndentationAndEmptyLines(`
      ..xx.xx@x.
      x@@.@.@.@@
      @@@@@.x.@@
      @.@@@@..@.
      x@.@@@@.@x
      .@@@@@@@.@
      .@.@.@.@@@
      x.@@@.@@@@
      .@@@@@@@@.
      x.x.@@@.x.
    `), grid.getAccessibleDiagram());
});

Deno.test("Example grid has 13 accessbile paper rolls", () => {
  const parser = new PaperRollGridParser(exampleDiagram);
  const grid = parser.getGrid();
  assertEquals(13, grid.countAccessiblePaperRolls());
});