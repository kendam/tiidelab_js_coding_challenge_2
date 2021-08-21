
var Div3 = "Fizz";
var Div5 = "Fuzz";
var Div3and5 = "FizzFuzz";

for( let index = 1; index <= 100; index++ ){
  if(index % 3 == 0){
      console.log(`${Div3}`);
  }
  else if(index % 5 ==0){
      console.log(`${Div5}`);
  }else if(index % 15 == 0){
      console.log(`${Div3and5}`)
  }
  else{
      console.log(index);
  }
}