import {Report} from "./loadReports.ts";
import {isSafe} from "./isSafe.ts";

export function countSafeReports(reports: Report[]): number {
  return reports.filter((report) => isSafe(report)).length;
}
