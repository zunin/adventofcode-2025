import { PaperRollGrid } from "./PaperRollGrid.ts";
import { Tile } from "./Tile.ts";


export class PaperRollTile implements Tile {
  constructor(private x: number, private y: number) {}
  isPaperRoll(): boolean {
    return true;
  }

  getAdjacentPositions(): Array<{x: number, y: number}> {
    return [
      {x: this.x - 1, y: this.y - 1},
      {x: this.x, y: this.y - 1},
      {x: this.x + 1, y: this.y - 1},
      {x: this.x - 1, y: this.y},
      {x: this.x + 1, y: this.y},
      {x: this.x - 1, y: this.y + 1},
      {x: this.x, y: this.y + 1},
      {x: this.x + 1, y: this.y + 1},
    ]
  }

  isAccessible(grid: PaperRollGrid): boolean {
    const getAdjacentPaperRolls = this.getAdjacentPositions().map(({x, y}) => grid.getTile(x, y))
      .filter(tile => !!tile && tile.isPaperRoll());

    return getAdjacentPaperRolls.length < 4;
  }

  getAccessibleDiagramRepresentation(grid: PaperRollGrid): string {
    return this.isAccessible(grid) ? "x" : "@"; 
  }
  getDiagramRepresentation(): string {
    return "@";
  }
}
