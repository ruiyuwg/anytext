const INFLECTIONAL: [string, string][] = [
  ["sses", "ss"],
  ["ies", "i"],
  ["ating", "at"],
  ["izing", "iz"],
  ["tion", "t"],
  ["sion", "s"],
  ["ment", ""],
  ["ness", ""],
  ["ing", ""],
  ["ated", "at"],
  ["ized", "iz"],
  ["ed", ""],
  ["es", ""],
];

const DERIVATIONAL: [string, string][] = [
  ["able", ""],
  ["ible", ""],
  ["ful", ""],
  ["ous", ""],
  ["ive", ""],
  ["ly", ""],
  ["er", ""],
  ["al", ""],
];

function applySuffix(word: string, rules: [string, string][]): string {
  for (const [suffix, replacement] of rules) {
    if (word.endsWith(suffix)) {
      const stem = word.slice(0, -suffix.length) + replacement;
      if (stem.length >= 3) return stem;
    }
  }
  return word;
}

export function stem(word: string): string {
  if (word.length <= 3) return word;

  let result = word;

  // Step A: inflectional
  result = applySuffix(result, INFLECTIONAL);

  // Handle trailing 's' separately (not after 's')
  if (result === word && result.endsWith("s") && !result.endsWith("ss")) {
    // stripped.length >= 3 is guaranteed: word.length > 3 (early return) && result === word
    result = result.slice(0, -1);
  }

  // Step B: derivational
  result = applySuffix(result, DERIVATIONAL);

  return result;
}
