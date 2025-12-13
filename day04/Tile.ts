import { PaperRollGrid } from "./PaperRollGrid.ts";

export interface Tile {
  getAccessibleDiagramRepresentation(grid: PaperRollGrid): string;
  getDiagramRepresentation(): string;
  isPaperRoll(): boolean;
  isAccessible(grid: PaperRollGrid): boolean;
}
