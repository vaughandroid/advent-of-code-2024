import { Report } from "./loadReports.ts";
import { isSafe } from "./isSafe.ts";
import { getDampenedReports } from "./getDampenedReports.ts";

export function countSafeReports(reports: Report[]): number {
  return reports.filter((report) => isSafe(report)).length;
}

export function countSafeDampenedReports(reports: Report[]): number {
  return reports
    .map((report) => getDampenedReports(report))
    .filter((dampenedReports) => {
      const firstSafeReport = dampenedReports.find((report) => isSafe(report));
      return firstSafeReport !== undefined;
    })
    .length;
}
