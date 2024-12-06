import { assertEquals } from "@std/assert";
import {loadInput} from "./loadInput.ts";
import {parseInput} from "./parseInput.ts";

const testInput = loadInput('testInput.txt');

Deno.test("parseInput", () => {
  const parsedInput = parseInput(testInput);
  assertEquals(parsedInput, [
    { a: 2, b: 4 },
    { a: 5, b: 5 },
    { a: 11, b: 8 },
    { a: 8, b: 5 },
  ])
})
