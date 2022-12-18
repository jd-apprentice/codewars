// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/javascript

const findGrade = (grade) => {
  const data = [
    {
      cond: (totalGrade) => totalGrade >= 90 && totalGrade <= 100,
      grade: "A"
    },
    {
      cond: (totalGrade) => totalGrade >= 80 && totalGrade < 90,
      grade: "B"
    },
    {
      cond: (totalGrade) => totalGrade >= 70 && totalGrade < 80,
      grade: "C"
    },
    {
      cond: (totalGrade) => totalGrade >= 60 && totalGrade < 70,
      grade: "D"
    },
    {
      cond: (totalGrade) => totalGrade >= 0 && totalGrade < 60,
      grade: "F"
    }
  ]
  return data.find((a) => a.cond(grade))?.grade
}

function getGrade (s1, s2, s3) {
  const totalGrade = (s1 + s2 + s3) / 3
  return findGrade(totalGrade)
}
