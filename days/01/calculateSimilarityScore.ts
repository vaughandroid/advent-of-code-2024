import { InputLists } from "./loadInput.ts";

export function calculateSimilarityScore(
  { leftList, rightList }: InputLists,
): number {
  let similarityScore = 0;

  leftList.forEach((value) => {
    const rightOccurrences = countOccurrences(value, rightList);
    similarityScore += value * rightOccurrences;
  });

  return similarityScore;
}

function countOccurrences(value: number, list: number[]): number {
  return list.filter((item) => item === value).length;
}
