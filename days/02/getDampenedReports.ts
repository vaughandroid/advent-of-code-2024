import { Report } from "./loadReports.ts";

export function getDampenedReports({ levels }: Report): Report[] {
  const reports: Report[] = [];
  for (let i = 0; i < levels.length; i++) {
    const dampenedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
    reports.push({ levels: dampenedLevels });
  }
  return reports;
}
