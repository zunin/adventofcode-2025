import { ChangeableTile } from "./ChangableTile.ts";
import { Tile } from "./Tile.ts";

export class PaperRollGrid {
  constructor(private tiles: Array<Array<ChangeableTile>>) {}

  countRemovedPaperRolls(): number {
    let count = 0;
    let removableTiles = this.tiles.flatMap((x) => x)
        .filter((tile) => tile.isAccessible(this));

    while (removableTiles.length !== 0) {
      removableTiles = this.tiles.flatMap((x) => x)
        .filter((tile) => tile.isAccessible(this));
      removableTiles.forEach(tile => {
        count += 1;
        tile.remove()
      });
    }
    
    return count;
  }
  getTile(x: number, y: number): ChangeableTile | null {
    try {
      return this.tiles[y][x];
    } catch (_) {
      return null;
    }
  }

  getAccessibleDiagram(): string {
    return this.tiles
      .map((tileLine) =>
        tileLine
          .map((tile) => tile.getAccessibleDiagramRepresentation(this))
          .join("")
      ).join("\n");
  }
  getDiagram(): string {
    return this.tiles
      .map((tileLine) =>
        tileLine
          .map((tile) => tile.getDiagramRepresentation())
          .join("")
      ).join("\n");
  }

  countAccessiblePaperRolls(): number {
    return this.tiles.flatMap((x) => x).filter((tile) =>
      tile.isAccessible(this)
    ).length;
  }
}
