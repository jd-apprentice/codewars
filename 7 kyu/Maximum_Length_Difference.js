// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  return !a1.length || !a2.length ? -1 : Math.max(
    ...a1.flatMap(x => a2.map(y => Math.abs(x.length - y.length)))
  );
}
