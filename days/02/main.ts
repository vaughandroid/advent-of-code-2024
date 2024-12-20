import { loadReports } from "./loadReports.ts";
import {
  countSafeDampenedReports,
  countSafeReports,
} from "./countSafeReports.ts";

if (import.meta.main) {
  const reports = loadReports("input.txt");

  // Part 1
  const safeCount = countSafeReports(reports);
  console.log(`2.1: Safe report count: ${safeCount}`);

  // Part 2
  const safeCountWithDampening = countSafeDampenedReports(reports);
  console.log(
    `2.2: Safe report count (with dampening): ${safeCountWithDampening}`,
  );
}
