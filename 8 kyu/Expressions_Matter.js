// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/javascript

function expressionMatter(a, b, c) {
  const eval1 = a * b * c
  const eval2 = a * (b + c)
  const eval3 = a + b + c
  const eval4 = (a + b) * c
  
  return Math.max(...[eval1, eval2, eval3, eval4])
}

expressionMatter(2, 10, 3) // 60
expressionMatter(1, 8, 3) // 27
expressionMatter(9, 7, 2) // 126
expressionMatter(1, 1, 10) // 20
expressionMatter(9, 1, 1) // 18
expressionMatter(10, 5, 6) // 300
expressionMatter(1, 10, 1) // 12
