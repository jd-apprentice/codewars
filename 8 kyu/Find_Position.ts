// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/typescript

export function position(letter: string): string {
  const values: Record<string, number> = {};
  for (let i = 1; i <= 26; i++) {
    values[String.fromCharCode(96 + i)] = i;
  }
  
  return `Position of alphabet: ${values[letter]}`
}
