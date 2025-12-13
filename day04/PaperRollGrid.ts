import { Tile } from "./Tile.ts";


export class PaperRollGrid {
  constructor(private tiles: Array<Array<Tile>>) {
    
  }

  getTile(x: number, y: number): Tile | null {
    try {
      return this.tiles[y][x];
    } catch(_) {
      return null;
    }
  }

  getAccessibleDiagram(): string {
    return this.tiles
      .map((tileLine) => tileLine
        .map((tile) => tile.getAccessibleDiagramRepresentation(this))
        .join("")
      ).join("\n");
  }
  getDiagram(): string {
    return this.tiles
      .map((tileLine) => tileLine
        .map((tile) => tile.getDiagramRepresentation())
        .join("")
      ).join("\n");
  }

  countAccessiblePaperRolls(): number {
    return this.tiles.flatMap(x => x).filter(tile => tile.isAccessible(this)).length;
  }
}
