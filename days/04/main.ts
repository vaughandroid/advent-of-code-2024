import {loadGrid} from "./loadGrid.ts";
import {countWordInGrid} from "./countWord.ts";

if (import.meta.main) {
  const grid = loadGrid("input.txt");

  // Part 1
  const count = countWordInGrid("XMAS", grid);
  console.log(`4.1: Word count: ${count}`);
}
