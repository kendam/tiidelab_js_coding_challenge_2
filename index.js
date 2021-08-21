const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    switch(i){
      case (i % 3 === 0):
        console.log('Fizz')
      case (i % 5 === 0):
        console.log('Buzz')
      case (i % 15 === 0):
        console.log('FizzBuzz')
    }
  }
}

const chessboard = (width = 8) => {
  let board = ''
  let value = false
  for (let i = 1; i < Math.pow(width, 2)+1; i++) {
    if ((i+value) % 2 === 0) {
     board = board.concat('* ')
    } else {
      board = board.concat('# ')
    }
    if (i !== 0 && i % width === 0) {
      board = board.concat('\n')
      value = !value
    }
  }
  return board
}

const getnum = (text) => {
  answer = prompt(text)
  while (true) {
    console.log((parseFloat(answer).toString !== 'NaN'))
    // if (answer === null) return false
    if (parseFloat(answer).toString !== 'NaN') {
      answer = prompt('nope')
    } else {
      break
    }
    return answer
  }
}

const numchessboard = (text) => {
  let width = getnum(text)
  if (width) {
    console.log('width')
    return chessboard(width)
  } else {
    return false
  }
}

const runchessboard = () => {
  res = prompt('Specify a width')
  while(true) {
    if (res !== (null)) {
      let parsedRes = parseFloat(res)
      if (parsedRes.toString !== 'NaN') {
        res = prompt(chessboard(parsedRes))
      }
      else {
        res = prompt("That's not a number")
      }
    } else {
      break
    }
  }
}