import { assert, assertEquals, assertFalse } from "@std/assert";
import { loadReports } from "./loadReports.ts";
import { isSafe } from "./isSafe.ts";
import { countSafeDampenedReports, countSafeReports } from "./countSafeReports.ts";
import { getDampenedReports } from "./getDampenedReports.ts";

const reports = loadReports("testInput.txt");

Deno.test("loadReports", async (t) => {
  await t.step("Loads all the reports", () => {
    assertEquals(reports.length, 6);
  });

  await t.step("Loads all the levels for each report", () => {
    assertEquals(reports[0].levels, [7, 6, 4, 2, 1]);
  });
});

Deno.test("isSafe", async (t) => {
  await t.step("Safe if all are increasing by 1, 2, or 3", () => {
    assert(isSafe({ levels: [1, 2, 4, 7] }));
  });

  await t.step("Safe if all are decreasing by 1, 2, or 3", () => {
    assert(isSafe({ levels: [9, 8, 6, 3] }));
  });

  await t.step("Unsafe if increasing by 4", () => {
    assertFalse(isSafe({ levels: [1, 2, 4, 8] }));
  });

  await t.step("Unsafe if decreasing by 4", () => {
    assertFalse(isSafe({ levels: [9, 8, 6, 2] }));
  });

  await t.step("Unsafe if two values are the same", () => {
    assertFalse(isSafe({ levels: [9, 8, 8, 6, 3] }));
  });

  await t.step("Unsafe if some increase and some decrease", () => {
    assertFalse(isSafe({ levels: [1, 2, 3, 2, 1] }));
  });
});

Deno.test("countSafeReports", () => {
  assertEquals(countSafeReports(reports), 2);
});

Deno.test("getDampenedReports", () => {
  const input = [1, 2, 3, 4, 5];

  const output = getDampenedReports({ levels: input });

  assertEquals(output, [
    { levels: [2, 3, 4, 5] },
    { levels: [1, 3, 4, 5] },
    { levels: [1, 2, 4, 5] },
    { levels: [1, 2, 3, 5] },
    { levels: [1, 2, 3, 4] },
  ]);
});

Deno.test("countSafeDampenedReports", () => {
  assertEquals(countSafeDampenedReports(reports), 4);
});
