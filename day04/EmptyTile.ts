import { PaperRollGrid } from "./PaperRollGrid.ts";
import { Tile } from "./Tile.ts";


export class EmptyTile implements Tile {
  constructor(private x: number, private y: number) {}

  isAccessible(grid: PaperRollGrid): boolean {
    return false;
  }
  isPaperRoll(): boolean {
    return false;
  }
  getAccessibleDiagramRepresentation() {
    return ".";
  }
  getDiagramRepresentation(): string {
    return ".";
  }
}
