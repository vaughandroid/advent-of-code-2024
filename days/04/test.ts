import { assertEquals } from "@std/assert";
import { loadGrid } from "./loadGrid.ts";
import { Grid } from "./grid.ts";
import {countWord, countWordInGrid} from "./countWord.ts";

Deno.test("loadGrid", () => {
  const grid = loadGrid("testInput.txt");

  assertEquals(grid.charAt(0, 0), "M");
  assertEquals(grid.charAt(8, 0), "S");
  assertEquals(grid.charAt(1, 5), "X");
  assertEquals(grid.charAt(9, 9), "X");
});

Deno.test("Grid", async (t) => {
  const grid = new Grid([
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
  ]);

  await t.step("rows", () => {
    const rows = Array.from(grid.rows());
    assertEquals(rows, ["ABC", "DEF", "GHI"]);
  });

  await t.step("columns", () => {
    const rows = Array.from(grid.columns());
    assertEquals(rows, ["ADG", "BEH", "CFI"]);
  });

  await t.step("diagonals", () => {
    const rows = Array.from(grid.diagonals());
    assertEquals(rows, ["G", "DH", "AEI", "BF", "C", "A", "DB", "GEC", "HF", "I"]);
  });
});

Deno.test("countWord", async (t) => {
  await t.step("No match", () => {
    const count = countWord("FOO", "ABCDE");
    assertEquals(count, 0);
  });

  await t.step("Match at start", () => {
    const count = countWord("FOO", "FOOABCDE");
    assertEquals(count, 1);
  });

  await t.step("Match in middle", () => {
    const count = countWord("FOO", "ABFOOCDE");
    assertEquals(count, 1);
  });

  await t.step("Match at end", () => {
    const count = countWord("FOO", "ABCDEFOO");
    assertEquals(count, 1);
  });

  await t.step("Multiple matches", () => {
    const count = countWord("FOO", "FOOABCFOODEFOO");
    assertEquals(count, 3);
  });
});

Deno.test("countWordInGrid", () => {
  const grid = loadGrid("testInput.txt");
  const count = countWordInGrid("XMAS", grid);
  assertEquals(count, 18);
});
