// Challenge One (FizzBuzz)
function FizzBuzz(){
	for(let i = 0; i <=100; i++){
		if(i%3==0){
		  console.log('Fizz')
		}
	  if(i%5==0){
		  console.log('Buzz')
		}
	  if(i%3 == 0 && i%5 == 0){
		  console.log('FizzBuzz')
	  }
	}
	
}


// Challenge Two (Chessboard)
function chessBoard(){
	var board = "";
	var evenRow = "# # # # ";
	var oddRow = " # # # #";

	for ( var i = 0; i < 8; i++ ) {

		if ( i%2 == 0 ) board += evenRow + '\n';
		else board += oddRow + '\n';
	}
}
