import { PaperRollTile } from "./PaperRollTile.ts";
import { EmptyTile } from "./EmptyTile.ts";
import { Tile } from "./Tile.ts";
import { PaperRollGrid } from "./PaperRollGrid.ts";
import { ChangeableTile } from "./ChangableTile.ts";

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


  private characterToTile(character: string, x: number, y: number): ChangeableTile {
    switch (character) {
      case ".":
        return new ChangeableTile(new EmptyTile());
      case "@":
        return new ChangeableTile(new PaperRollTile(x, y));
      default:
        throw new Error(`'${character}}' is an unknown tile`);
    }
  }
}
