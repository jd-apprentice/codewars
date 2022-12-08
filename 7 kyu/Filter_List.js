// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// First Solution

function fl(l, n = []) {
  for (let i = 0; i < l.length; i++){
  	if (typeof l[i] === 'number') {
      n.push(l[i])
    }
  }
  return n
}

// Second Solution

const fl = (l, n = []) => l.filter((e) => typeof e === 'number' ? n.push(e) : null) && n

// Then realized this is the same

const fl = (l) => l.filter(e => typeof e === 'number')
