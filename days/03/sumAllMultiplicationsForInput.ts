import { sumMultiplications } from "./sumMultiplications.ts";
import { parseInput } from "./parseInput.ts";

export function sumAllMultiplicationsForInput(input: string): number {
  const multiplications = parseInput(input);
  return sumMultiplications(multiplications);
}
