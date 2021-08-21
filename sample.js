let divisibleByThree = "Fizz";
let divisibleByFive = "Buzz";

for (let number = 1; number <= 100; number++){
    switch (true){
        case number % 3 == 0 && number % 5 == 0:
            console.log(`${number} ${divisibleByThree}${divisibleByFive}`);
            break;
        case number % 3 == 0:
            console.log(`${number} ${divisibleByThree}`);
            break;
        case number % 5 == 0:
            console.log(`${number} ${divisibleByFive}`);
            break;
        default:
            console.log(number);
            break;
    }
}


for(i=0; i<=100; i++){
    if(i % 3 == 0){
        console.log(`${i} Buzz`);
    }
    else if(i % 5 == 0){
        console.log(`${i} Fizz`);
    }
    else if(i % 3 == 0 && i % 5 == 0){
        console.log(`${i} FizzBuzz`);
    }
    else {
        console.log(i);
    }
}

function chessboard(boardSize){
    var chess = " ";
    for(let row = 1; row <= boardSize; row++){
        for(let col = 1; col <= boardSize; col++){
            if ((row + col)% 2 ==0){
                chess += " "
            }
            else{
                chess += "#";
            }
        }
        chess += "\n";
    }
    console.log(chess);
    }

    chessboard(8)