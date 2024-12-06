import { loadInput } from "./loadInput.ts";
import { sumAllMultiplicationsForInput } from "./sumAllMultiplicationsForInput.ts";

if (import.meta.main) {
  const input = loadInput("input.txt");

  // Part 1
  const sum = sumAllMultiplicationsForInput(input);
  console.log(`3.1: Sum: ${sum}`);
}
