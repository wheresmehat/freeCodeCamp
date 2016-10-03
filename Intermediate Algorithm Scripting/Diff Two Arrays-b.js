function diffArray(arr1, arr2) {

	// Same, same; but different.
  
	var concatArr = arr1.concat(arr2);
	
	var newArr = concatArr.filter(function(value) {
		
		if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1)	{
			
			return value;	
			
		}	
		
	});

	console.log(newArr);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);	// [4]

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);		// ["piglet", 4]

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);	// ["diorite", "pink wool"]



//	same, but named function as argument
/*
function diffArray(arr1, arr2) {

	// Same, same; but different.
  
	var concatArr = arr1.concat(arr2);
	
	
	function checkSame(value) {
		
		if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1)	{
			
			return value;	
			
		}	
		
	}
	
	
	var newArr = concatArr.filter(checkSame);
	
	console.log(newArr);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);	// [4]

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);		// ["piglet", 4]

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);	// ["diorite", "pink wool"]

*/
