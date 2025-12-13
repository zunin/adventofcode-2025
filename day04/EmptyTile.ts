import { Tile } from "./Tile.ts";


export class EmptyTile implements Tile {
  getDiagramRepresentation(): string {
    return ".";
  }
}
