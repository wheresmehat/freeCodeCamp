function diffArray(arr1, arr2) {

	// Same, same; but different.
  
	var newFirst = arr1.filter(function(val) {
		
		return arr2.indexOf(val) < 0;
		
	});
	
	var newSecond = arr2.filter(function(val) {
		
		return arr1.indexOf(val) < 0;
		
	});
 
  
  	var newFinal = newFirst.concat(newSecond);
  
  	console.log(newFinal);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);	// [4]

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);		// ["piglet", 4]

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);	// ["diorite", "pink wool"]




// same but with equality comparison (=== -1)
/*

function diffArray(arr1, arr2) {

	// Same, same; but different.
  
	var newFirst = arr1.filter(function(val) {
		
		return arr2.indexOf(val) === -1;
		
	});
	
	var newSecond = arr2.filter(function(val) {
		
		return arr1.indexOf(val) === -1;
		
	});
 
  
  	var newFinal = newFirst.concat(newSecond);
  
  	console.log(newFinal);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);	// [4]

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);		// ["piglet", 4]

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);	// ["diorite", "pink wool"]


*/