export type Report = {
  levels: number[];
};

export function loadReports(filePath: string): Report[] {
  const input = Deno.readTextFileSync(`${import.meta.dirname}/${filePath}`);
  const lines = input.trim().split("\n");

  const reports: Report[] = [];
  lines.forEach((line) => {
    const levels = line.split(" ").map((it) => Number.parseInt(it));
    reports.push({ levels });
  });
  return reports;
}
