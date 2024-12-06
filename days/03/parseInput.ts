type Multiplication = {
  a: number;
  b: number;
};

export function parseInput(input: string): Multiplication[] {
  // Looking for "mul(<num>,<num>)"
  return input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)
    .map(match => ({ a: Number.parseInt(match[1]), b: Number.parseInt(match[2]) }))
    .toArray();
}
