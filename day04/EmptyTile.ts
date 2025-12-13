import { PaperRollGrid } from "./PaperRollGrid.ts";
import { Tile } from "./Tile.ts";


export class EmptyTile implements Tile {
  constructor() {}

  isAccessible(_grid: PaperRollGrid): boolean {
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
