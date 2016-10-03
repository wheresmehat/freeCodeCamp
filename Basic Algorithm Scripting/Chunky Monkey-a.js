function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  	var newArr = [];
  	
  	while (arr.length > 0) {
  		
  		var subArr = [];	
  		
  		for (var i = 0; i < size; i++) {
  			
  			if (arr.length) {
  				
  				subArr.push(arr.shift());
  		
           		//console.log(subArr);
  				
  			}
       
  		}
	
		newArr.push(subArr);
  		
  		console.log(newArr);
			
  	}
  	
  	return newArr;
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);