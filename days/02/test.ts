import { assertEquals } from "@std/assert";
import { loadInput } from "./loadInput.ts";

Deno.test("loadInput", async (t) => {
  const inputReports = loadInput("testInput.txt");

  await t.step("Loads all the reports", () => {
    assertEquals(inputReports.length, 6);
  });

  await t.step("Loads all the levels for each report", () => {
    assertEquals(inputReports[0].levels, [7, 6, 4, 2, 1]);
  });
});
