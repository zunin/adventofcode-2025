import { assertEquals } from "@std/assert/equals";
import { PaperRollGridParser } from "./PaperRollGridParser.ts";

const exampleDiagram = `
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
`.replaceAll(/([ ])*/g, '').trim(); // remove extra indentation and lines that makes it easier to read


Deno.test("Grid can recreate output", () => {
  const parser = new PaperRollGridParser(exampleDiagram);
  const grid = parser.getGrid();
  assertEquals(exampleDiagram, grid.getDiagram());
});

