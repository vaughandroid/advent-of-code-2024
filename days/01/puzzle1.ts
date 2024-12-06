import { loadInput } from "./loadInput.ts";

if (import.meta.main) {
  const [leftList, rightList] = loadInput("input.txt");

  console.log(leftList, rightList);
}
