import { assertEquals } from "@std/assert";
import { loadInput } from "./loadInput.ts";
import { parseInput } from "./parseInput.ts";
import { sumMultiplications } from "./sumMultiplications.ts";
import { sumAllMultiplicationsForInput } from "./sumAllMultiplicationsForInput.ts";

const testInput = loadInput("testInput.txt");

Deno.test("parseInput", () => {
  const parsedInput = parseInput(testInput);
  assertEquals(parsedInput, [
    { a: 2, b: 4 },
    { a: 5, b: 5 },
    { a: 11, b: 8 },
    { a: 8, b: 5 },
  ]);
});

Deno.test("sumMultiplications", async (t) => {
  await t.step("Empty list returns 0", () => {
    const sum = sumMultiplications([]);
    assertEquals(sum, 0);
  });

  await t.step("List with one item", () => {
    const sum = sumMultiplications([{ a: 3, b: 4 }]);
    assertEquals(sum, 12);
  });

  await t.step("List with many items", () => {
    const sum = sumMultiplications([
      { a: 3, b: 4 }, // 12
      { a: 1, b: 9 }, // 9
      { a: 3, b: 3 }, // 9
    ]);
    assertEquals(sum, 30);
  });
});

Deno.test("sumAllMultiplicationsForInput", () => {
  const sum = sumAllMultiplicationsForInput(testInput);
  assertEquals(sum, 161);
});
