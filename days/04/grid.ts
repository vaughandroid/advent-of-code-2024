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

type Coord = {
  x: number;
  y: number;
};

export class Grid {
  private readonly _grid: Char[][];
  constructor(grid: Char[][]) {
    this._grid = grid;
  }

  charAt(x: number, y: number): Char | "" {
    return this._grid[y][x];
  }

  get height(): number {
    return this._grid.length;
  }

  get width(): number {
    return this._grid[0].length;
  }

  *rows(): IterableIterator<string> {
    for (let y = 0; y < this.height; y++) {
      let row = "";
      for (let x = 0; x < this.width; x++) {
        row += this.charAt(x, y);
      }
      yield row;
    }
  }

  *columns(): IterableIterator<string> {
    for (let x = 0; x < this.width; x++) {
      let column = "";
      for (let y = 0; y < this.height; y++) {
        column += this.charAt(x, y);
      }
      yield column;
    }
  }

  *diagonals(): IterableIterator<string> {
    for (let n = 0; n < this.width + this.height - 1; n++) {
      const startY = Math.max((this.height - 1) - n, 0);
      const startX = Math.max(n - (this.height - 1), 0);
      let diagonal = "";
      for (
        let x = startX, y = startY;
        x < this.width && y < this.height;
        x++, y++
      ) {
        const char = this.charAt(x, y);
        diagonal += char;
      }
      yield diagonal;
    }
    for (let n = 0; n < this.width + this.height - 1; n++) {
      const startY = Math.min(n, this.width - 1);
      const startX = Math.max(n - (this.width - 1), 0);
      let diagonal = "";
      for (let x = startX, y = startY; x < this.width && y >= 0; x++, y--) {
        const char = this.charAt(x, y);
        diagonal += char;
      }
      yield diagonal;
    }
  }

  *aCoords(): IterableIterator<Coord> {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.charAt(x, y) === "A") {
          yield { x, y };
        }
      }
    }
  }

  isXMas({ x, y }: Coord): boolean {
    if (x < 1 || x >= this.width - 1 || y < 1 || y >= this.height - 1) return false;

    const diagonalA = this.charAt(x - 1, y - 1) + this.charAt(x, y) +
      this.charAt(x + 1, y + 1);
    const diagonalB = this.charAt(x - 1, y + 1) + this.charAt(x, y) +
      this.charAt(x + 1, y - 1);

    return this.charAt(x, y) === "A" &&
      (diagonalA === "MAS" || diagonalA === "SAM") &&
      (diagonalB === "MAS" || diagonalB === "SAM");
  }

  countXMas() {
    let count = 0;
    for (const coord of this.aCoords()) {
      if (this.isXMas(coord)) {
        count++;
      }
    }
    return count;
  }
}
