// https://www.codewars.com/kata/591a86bfe76dc98f24000030/javascript

function censorThis(text, forbiddenWords) {
  return text
    .split(" ")
    .map((word) =>
      forbiddenWords.includes(word.toLowerCase())
        ? "*".repeat(word.length)
        : word
    )
    .join(" ");
}
