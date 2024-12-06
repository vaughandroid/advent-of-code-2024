export function loadInput(filePath: string): string {
  return Deno.readTextFileSync(`${import.meta.dirname}/${filePath}`).trim();
}
