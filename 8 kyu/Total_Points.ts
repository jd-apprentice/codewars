//  https://www.codewars.com/kata/5bb904724c47249b10000131/typescript

export function points(games: string[], points = 0): number | undefined {
  return games
    .map((a: string) => a.split(":").map(Number))
    .map((b: number[]) =>
      b[0] > b[1]
        ? (points += 3)
        : b[0] === b[1]
        ? (points += 1)
        : (points += 0)
    )
    .at(-1);
}
