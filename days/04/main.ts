import {loadGrid} from "./loadGrid.ts";
import {countWordInGrid} from "./countWord.ts";

if (import.meta.main) {
  const grid = loadGrid("input.txt");

  // Part 1
  const xmasCount = countWordInGrid("XMAS", grid);
  console.log(`4.1: Word count: ${xmasCount}`);

  // Part 2
  const xMasCount = grid.countXMas();
  console.log(`4.2: Word count: ${xMasCount}`);
}
