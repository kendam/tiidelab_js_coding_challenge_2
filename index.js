const fizzbuzz = () => {
  for (let index = 1; index <= 100; index++) {
    switch(true){
      case (index % 3 * 5 === 0):
        console.log('Fizz')
        console.log('Buzz')
        console.log('FizzBuzz')
        break
      case (index % 3 === 0):
        console.log('Fizz')
        break
      case (index % 5 === 0):
        console.log('Buzz')
        break
      default:
        console.log(index)
    }
  }
}

const chessboard = (width = 8) => {
  let board = ''
  let value = false
  for (let index = 1; index < Math.pow(width, 2)+1; index++) {
    let even = width % 2 === 0
    if ((even ? index + value : index) % 2 === 0) {
     board = board.concat('* ')
    } else {
      board = board.concat('# ')
    }
    if (index !== 0 && index % width === 0) {
      board = board.concat('\n')
      value = !value
    }
  }
  return board
}

const runchessboard = () => {
  res = prompt('Specify a width')
  while(true) {
    if (res !== (null)) {
      let parsedRes = parseFloat(res)
      if (parsedRes.toString() !== 'NaN') {
        console.log('ye')
        res = prompt(chessboard(parsedRes))
      } else {
        console.log('eh')
        res = prompt("That's not a valid number")
      }
    } else {
      break
    }
  }
}