export function editDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;

  // Quick exits
  if (m === 0) return n;
  if (n === 0) return m;
  if (a === b) return 0;

  // Single row DP
  const row = new Array<number>(n + 1);
  for (let j = 0; j <= n; j++) row[j] = j;

  for (let i = 1; i <= m; i++) {
    let prev = row[0]!;
    row[0] = i;

    for (let j = 1; j <= n; j++) {
      const curr = row[j]!;
      if (a[i - 1] === b[j - 1]) {
        row[j] = prev;
      } else {
        row[j] = 1 + Math.min(prev, curr, row[j - 1]!);
      }
      prev = curr;
    }
  }

  return row[n]!;
}

function maxDistance(tokenLength: number): number {
  if (tokenLength <= 3) return 0;
  if (tokenLength <= 5) return 1;
  if (tokenLength <= 8) return 2;
  return 3;
}

export function fuzzyMatch(token: string, target: string): boolean {
  const max = maxDistance(token.length);
  if (max === 0) return false;

  // Compare against individual words in the target
  const words = target.split(/[^a-z0-9]+/).filter(Boolean);
  for (const word of words) {
    if (Math.abs(token.length - word.length) > max) continue;
    if (editDistance(token, word) <= max) return true;
  }

  return false;
}
