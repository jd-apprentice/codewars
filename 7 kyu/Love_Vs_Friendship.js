// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string) {
  return string.split("").reduce((a, b) => (a += b.charCodeAt() - 96), 0);
}

wordsToMarks("attitude"); // 100
wordsToMarks("friends"); // 75
wordsToMarks("family"); // 66
wordsToMarks("selfness"); // 99
wordsToMarks("knowledge"); // 96
