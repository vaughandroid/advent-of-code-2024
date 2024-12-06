import { loadInput } from "./loadInput.ts";
import { calculateTotalDistance } from "./calculateTotalDistance.ts";
import { calculateSimilarityScore } from "./calculateSimilarityScore.ts";

if (import.meta.main) {
  const inputLists = loadInput("input.txt");

  // Part 1
  const totalDistance = calculateTotalDistance(inputLists);
  console.log(`1.1: Total distance: ${totalDistance}`);

  // Part 2
  const similarityScore = calculateSimilarityScore(inputLists);
  console.log(`1.2: Similarity score: ${similarityScore}`);
}
