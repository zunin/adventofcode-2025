import { PaperRollTile } from "./PaperRollTile.ts";
import { EmptyTile } from "./EmptyTile.ts";
import { Tile } from "./Tile.ts";
import { PaperRollGrid } from "./PaperRollGrid.ts";

export class PaperRollGridParser {
  constructor(private input: string) {
  }

  getGrid(): PaperRollGrid {
    const tileLines = this.input
      .split(/\n/)
      .map((line) => line.trim())
      .filter((line) => !!line)
      .map((line, y) => {
        return line.split("").map((character, x) => this.characterToTile(character, x, y));
      });
    return new PaperRollGrid(tileLines);
  }


  private characterToTile(character: string, x: number, y: number): Tile {
    switch (character) {
      case ".":
        return new EmptyTile(x, y);
      case "@":
        return new PaperRollTile(x, y);
      default:
        throw new Error(`'${character}}' is an unknown tile`);
    }
  }
}
