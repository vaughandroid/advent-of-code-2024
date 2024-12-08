export type Char =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export function isChar(maybeChar: string): maybeChar is Char {
  return maybeChar.length === 1 &&
    maybeChar.charCodeAt(0) >= "A".charCodeAt(0) &&
    maybeChar.charCodeAt(0) <= "Z".charCodeAt(0);
}

export class Grid {
  private readonly _grid: Char[][];
  constructor(grid: Char[][]) {
    this._grid = grid;
  }

  charAt(x: number, y: number): Char {
    return this._grid[y][x];
  }
}
