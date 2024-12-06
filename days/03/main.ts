import { loadInput } from "./loadInput.ts";
import { sumAllMultiplicationsForInput } from "./sumAllMultiplicationsForInput.ts";

if (import.meta.main) {
  const input = loadInput("input.txt");

  // Part 1
  const sum1 = sumAllMultiplicationsForInput(input, false);
  console.log(`3.1: Sum: ${sum1}`);

  // Part 2
  const sum2 = sumAllMultiplicationsForInput(input, true);
  console.log(`3.2: Sum: ${sum2}`);
}
