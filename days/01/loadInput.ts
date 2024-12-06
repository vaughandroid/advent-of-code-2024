export type InputLists = [number[], number[]];

export function loadInput(filePath: string): InputLists {
  const input = Deno.readTextFileSync(`${import.meta.dirname}/${filePath}`);
  const lines = input.trim().split("\n");

  const leftList: number[] = [], rightList: number[] = [];
  lines.forEach((line) => {
    const [left, right] = line.split("   ");
    leftList.push(Number.parseInt(left));
    rightList.push(Number.parseInt(right));
  });

  return [leftList, rightList];
}
