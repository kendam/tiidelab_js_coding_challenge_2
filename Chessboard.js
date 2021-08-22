let  new_string = "";

for(let j =0; j < 8; j++){
     for(let i =0; i < 8; i++){
             if((j+i) % 2 == 0){
             new_string += " "
             }else{ 
                 new_string += "#"}
         }
         new_string += "\n"
     }
     console.log(new_string)