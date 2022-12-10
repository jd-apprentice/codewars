// https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
}
