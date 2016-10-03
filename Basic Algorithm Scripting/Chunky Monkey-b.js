function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  	var iter = Math.ceil(arr.length / size);								// how many subArray you're gonna have		 
  	var lastSize = (arr.length % size) ? (arr.length % size) : size ;		// if there is a remainder that is the size of the last subArray; if remmainder is 0 the last size is size
  	
  	console.log("iter: " + iter);
  	console.log("lastSize: " + lastSize);
  	
  	var newArr = [];
  	
  	for (var i = 0; i < iter; i++) {
  		
  		var subArr = [];
  		
  		var subSize = (i + 1 < iter) ? size : lastSize;						//  if i + 1 is less than iter that means we are not on the last subArray iteration and we still use size as size
  		
  		for (var j = 0; j < subSize; j++) {
  			
  			subArr.push(arr.shift());
  		
           	//console.log(subArr);
  				
  		}
	
		newArr.push(subArr);
  		
  		//console.log(newArr);
			
  	}
  	
  	console.log(newArr);
  	return newArr;
  	
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);