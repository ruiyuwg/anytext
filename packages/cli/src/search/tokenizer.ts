export function tokenize(text: string): string[] {
  const raw = text.toLowerCase().split(/\s+/).filter(Boolean);
  const tokens: string[] = [];
  const seen = new Set<string>();

  for (const token of raw) {
    if (seen.has(token)) continue;
    seen.add(token);
    tokens.push(token);

    if (token.includes("-")) {
      for (const part of token.split("-")) {
        if (part && !seen.has(part)) {
          seen.add(part);
          tokens.push(part);
        }
      }
    }
  }

  return tokens;
}
