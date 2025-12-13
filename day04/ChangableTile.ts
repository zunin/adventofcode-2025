import { EmptyTile } from "./EmptyTile.ts";
import { PaperRollGrid } from "./PaperRollGrid.ts";
import { Tile } from "./Tile.ts";

export class ChangeableTile implements Tile {
  constructor(private behavior: Tile) {}
  getAccessibleDiagramRepresentation(grid: PaperRollGrid): string {
    return this.behavior.getAccessibleDiagramRepresentation(grid);
  }
  getDiagramRepresentation(): string {
    return this.behavior.getDiagramRepresentation();
  }
  isPaperRoll(): boolean {
    return this.behavior.isPaperRoll();
  }
  isAccessible(grid: PaperRollGrid): boolean {
    return this.behavior.isAccessible(grid);
  }

  remove() {
    this.behavior = new EmptyTile();
  }
}
