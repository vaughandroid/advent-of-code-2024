import { Multiplication } from "./parseInput.ts";

export function sumMultiplications(multiplications: Multiplication[]): number {
  let total = 0;
  multiplications.forEach(({ a, b }) => {
    total += a * b;
  });
  return total;
}
