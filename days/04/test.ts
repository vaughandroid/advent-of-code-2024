import { assertEquals } from "@std/assert";
import { loadGrid } from "./loadGrid.ts";

Deno.test("loadGrid", () => {
  const testGrid = loadGrid("testInput.txt");

  assertEquals(testGrid.charAt(0, 0), "M");
  assertEquals(testGrid.charAt(8, 0), "S");
  assertEquals(testGrid.charAt(1, 5), "X");
  assertEquals(testGrid.charAt(9, 9), "X");
});
