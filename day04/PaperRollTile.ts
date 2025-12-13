import { Tile } from "./Tile.ts";


export class PaperRollTile implements Tile {
  getDiagramRepresentation(): string {
    return "@";
  }
}
