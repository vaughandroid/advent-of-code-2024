export type Multiplication = {
  a: number;
  b: number;
};

export function parseInput(
  input: string,
  respectDoAndDont: boolean,
): Multiplication[] {
  const filteredInput = respectDoAndDont ? filterOutDont(input) : input;
  // Looking for "mul(<num>,<num>)"
  const regexp = /mul\((\d{1,3}),(\d{1,3})\)/g;
  return filteredInput.matchAll(regexp)
    .map((match) => ({
      a: Number.parseInt(match[1]),
      b: Number.parseInt(match[2]),
    }))
    .toArray();
}

function filterOutDont(input: string): string {
  let result = "", idx = 0;

  while (true) {
    const nextDontIdx = input.indexOf("don't()", idx);
    if (nextDontIdx !== -1) {
      result += input.slice(idx, nextDontIdx);
      const nextDoIdx = (input.indexOf("do()", nextDontIdx));
      if (nextDoIdx !== -1) {
        idx = nextDoIdx;
      } else {
        break;
      }
    } else {
      result += input.slice(idx);
      break;
    }
  }

  return result;
}
