import { assertEquals } from "@std/assert";
import { loadInput } from "./loadInput.ts";
import { calculateTotalDistance } from "./calculateTotalDistance.ts";
import { calculateSimilarityScore } from "./calculateSimilarityScore.ts";

const inputLists = loadInput("testInput.txt");

Deno.test("parseInput", async (t) => {
  const { leftList, rightList } = inputLists;

  await t.step("Left list contents are correct", () => {
    assertEquals(leftList, [3, 4, 2, 1, 3, 3]);
  });

  await t.step("Right list contents are correct", () => {
    assertEquals(rightList, [4, 3, 5, 3, 9, 3]);
  });
});

Deno.test("calculateTotalDistance", () => {
  const totalDistance = calculateTotalDistance(inputLists);

  assertEquals(totalDistance, 11);
});

Deno.test("calculateSimilarityScore", () => {
  const similarityScore = calculateSimilarityScore(inputLists);

  assertEquals(similarityScore, 31);
});
