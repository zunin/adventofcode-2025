import { Tile } from "./Tile.ts";


export class PaperRollGrid {
  constructor(private tiles: Array<Array<Tile>>) { }
  getDiagram(): string {
    return this.tiles
      .map((tileLine) => tileLine
        .map((tile) => tile.getDiagramRepresentation())
        .join("")
      ).join("\n");
  }
}
