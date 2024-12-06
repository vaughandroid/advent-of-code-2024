import { Report } from "./loadReports.ts";

export function isSafe(report: Report): boolean {
  // Take a copy which we can manipulate safely.
  const levels = [...report.levels];

  // Normalise to an ascending list
  const descending = levels[0] > levels[levels.length - 1];
  if (descending) {
    levels.reverse();
  }

  let isSafe = true;
  for (let i = 0; i < levels.length - 1; i++) {
    const curr = levels[i];
    const next = levels[i + 1];
    const diff = next - curr;

    if (diff <= 0 || diff >= 4) {
      isSafe = false;
      break;
    }
  }

  return isSafe;
}
