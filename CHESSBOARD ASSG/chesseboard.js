 size = 10; 
    
    grid = ""
    
    for (var i = 1; i <= size; i++) {
      for (var j = 1; j <= size; j++) {
        if (i % 2 === 0) {
        	grid+= "# "
        } else {
        	grid+= " #"
        }
      }
      grid+= "\n"
    }
    
    
    console.log(grid)