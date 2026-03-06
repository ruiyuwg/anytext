function useColor(): boolean {
  if (process.env["NO_COLOR"] !== undefined) return false;
  if (process.env["FORCE_COLOR"] !== undefined) return true;
  return process.stdout.isTTY === true;
}

const COLOR = useColor();

function style(codes: string, s: string): string {
  return COLOR ? `\x1b[${codes}m${s}\x1b[0m` : s;
}

export function bold(s: string): string {
  return style("1", s);
}

export function dim(s: string): string {
  return style("2", s);
}

export function cyan(s: string): string {
  return style("36", s);
}

export function green(s: string): string {
  return style("32", s);
}

export function red(s: string): string {
  return style("31", s);
}

export function heading(s: string): string {
  return style("1;36", s);
}

export function hint(s: string): string {
  return style("2;3", s);
}

function visualLength(s: string): number {
  return s.replace(/\x1b\[[0-9;]*m/g, "").length;
}

export function padEnd(s: string, width: number): string {
  const pad = width - visualLength(s);
  return pad > 0 ? s + " ".repeat(pad) : s;
}

export function printError(message: string, suggestion?: string): void {
  console.error(COLOR ? `\x1b[1;31merror:\x1b[0m ${message}` : `error: ${message}`);
  if (suggestion) {
    console.error(COLOR ? `\x1b[2;3m${suggestion}\x1b[0m` : suggestion);
  }
}
