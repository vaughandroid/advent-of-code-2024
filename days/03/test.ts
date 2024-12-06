import { assertEquals } from "@std/assert";
import { loadInput } from "./loadInput.ts";
import { parseInput } from "./parseInput.ts";
import { sumMultiplications } from "./sumMultiplications.ts";
import { sumAllMultiplicationsForInput } from "./sumAllMultiplicationsForInput.ts";

const testInput = loadInput("testInput.txt");
const testInputWithDoAndDont = loadInput("testInputWithDoAndDont.txt");

Deno.test("parseInput", async (t) => {
  await t.step("Ignoring do & don't", () => {
    const parsedInput = parseInput(testInput, false);
    assertEquals(parsedInput, [
      { a: 2, b: 4 },
      { a: 5, b: 5 },
      { a: 11, b: 8 },
      { a: 8, b: 5 },
    ]);
  });

  await t.step("Respecting do & don't", () => {
    const parsedInput = parseInput(testInputWithDoAndDont, true);
    assertEquals(parsedInput, [
      { a: 2, b: 4 },
      { a: 8, b: 5 },
    ]);
  });
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

Deno.test("sumAllMultiplicationsForInput", async (t) => {
  await t.step("Ignoring do & don't", () => {
    const sum = sumAllMultiplicationsForInput(testInput, false);
    assertEquals(sum, 161);
  });

  await t.step("Respecting do & don't", () => {
    const sum = sumAllMultiplicationsForInput(testInputWithDoAndDont, true);
    assertEquals(sum, 48);
  });
});
