import { Grid } from "./grid.ts";

export function countWord(word: string, text: string): number {
  const regex = new RegExp(word, "g");
  return text.matchAll(regex).toArray().length;
}

export function countWordInGrid(word: string, grid: Grid): number {
  const texts = [...grid.rows(), ...grid.columns(), ...grid.diagonals()];
  let count = 0;
  texts.forEach((text) => {
    count += countWord(word, text);
    count += countWord(reverseText(word), text);
  });
  return count;
}

function reverseText(text: string): string {
  return text.split("").reverse().join("");
}
