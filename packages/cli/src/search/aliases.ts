const LIBRARY_ALIASES: Record<string, string> = {
  next: "nextjs",
  "next.js": "nextjs",
  tailwind: "tailwindcss",
  tw: "tailwindcss",
  "tailwind-css": "tailwindcss",
  "drizzle-orm": "drizzle",
  ai: "ai-sdk",
  "vercel-ai": "ai-sdk",
  "vercel-ai-sdk": "ai-sdk",
  t3: "trpc",
};

const CONCEPT_ALIASES: Record<string, string[]> = {
  auth: ["authentication", "authorization"],
  ssr: ["server-side-rendering", "server-rendering"],
  csr: ["client-side-rendering", "client-rendering"],
  rsc: ["server-components", "react-server-components"],
  isr: ["incremental-static-regeneration"],
  mw: ["middleware"],
  db: ["database"],
  env: ["environment-variables"],
};

export function expandQuery(tokens: string[]): string[] {
  const result: string[] = [];
  const seen = new Set<string>();

  for (const token of tokens) {
    if (seen.has(token)) continue;
    seen.add(token);
    result.push(token);

    const libraryAlias = LIBRARY_ALIASES[token];
    if (libraryAlias && !seen.has(libraryAlias)) {
      seen.add(libraryAlias);
      result.push(libraryAlias);
    }

    const conceptExpansions = CONCEPT_ALIASES[token];
    if (conceptExpansions) {
      for (const expanded of conceptExpansions) {
        if (!seen.has(expanded)) {
          seen.add(expanded);
          result.push(expanded);
        }
      }
    }
  }

  return result;
}
