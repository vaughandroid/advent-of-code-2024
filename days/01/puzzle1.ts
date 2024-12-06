import { loadInput } from "./loadInput.ts";
import {calculateTotalDistance} from "./calculateTotalDistance.ts";

if (import.meta.main) {
  const inputLists = loadInput("input.txt");
  const totalDistance = calculateTotalDistance(inputLists);
  console.log(`Puzzle 1: Total distance: ${totalDistance}`);
}
