import { InputLists } from "./loadInput.ts";

export function calculateTotalDistance(
  { leftList, rightList }: InputLists,
): number {
  const leftSorted = leftList.sort();
  const rightSorted = rightList.sort();

  let totalDistance = 0;
  for (let i = 0; i < leftList.length; i++) {
    const left = leftSorted[i];
    const right = rightSorted[i];

    totalDistance += Math.abs(left - right);
  }

  return totalDistance;
}
