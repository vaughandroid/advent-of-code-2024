import {Char, Grid, isChar} from "./grid.ts";

export function loadGrid(filePath: string): Grid {
  const text = Deno.readTextFileSync(`${import.meta.dirname}/${filePath}`).trim().toUpperCase();

  const chars: Char[][] = [];
  text.split("\n").forEach((line) => {
    const gridLine: Char[] = [];
    for (const char of line) {
      if (isChar(char)) {
        gridLine.push(char);
      } else {
        throw Error(`Invalid input: ${char}`);
      }
    }
    chars.push(gridLine);
  });

  return new Grid(chars);
}
