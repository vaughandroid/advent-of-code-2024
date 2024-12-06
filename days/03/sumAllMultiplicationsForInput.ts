import { sumMultiplications } from "./sumMultiplications.ts";
import { parseInput } from "./parseInput.ts";

export function sumAllMultiplicationsForInput(input: string, respectDoAndDont: boolean): number {
  const multiplications = parseInput(input, respectDoAndDont);
  return sumMultiplications(multiplications);
}
