// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

// Task Overview:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.

function enough(cap, on, wait) {
  return (wait + on) <= cap ? 0 : Math.abs(cap - on - wait)
}

enough(10, 5, 5) // 0
enough(100, 60, 50) // 10
enough(20, 5, 5) // 0
enough(71, 52, 48) // 29
