import { assertEquals } from "@std/assert";
import { loadInput } from "./loadInput.ts";

Deno.test("parseInput", async (t) => {
  const [leftList, rightList] = loadInput("testInput.txt");

  await t.step("Left list contents are correct", () => {
    assertEquals(leftList, [3, 4, 2, 1, 3, 3]);
  });

  await t.step("Right list contents are correct", () => {
    assertEquals(rightList, [4, 3, 5, 3, 9, 3]);
  });
});