
for(i = 1 ; i<=100 ; i++){
	if(i%3===0 && i%5===0){
		console.log("fizz-buzz")
		}
	/* This means that for each value of "i", if it's divisible by 3/5, log "fizz". If not, log "i". */
	else if(i%3===0){
		console.log("fizz")
		}
	else if(i% 5===0){
		console.log("buzz")
		}
	else{
		console.log(i)
		}
	}
	