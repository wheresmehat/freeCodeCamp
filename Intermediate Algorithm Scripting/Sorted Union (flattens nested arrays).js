
function uniteUnique(arr) {
	
	var firstPass = [].concat.apply([], arguments);	// [] is a somewhat "dirty" shortcut for Array.prototype
	
	var secondPass = [].concat.apply([], firstPass);
	
	
	console.log(secondPass);
	
	var newArr = [secondPass[0]];
	
	
	for (var i = 1; i < secondPass.length; i++) {
		
		if (secondPass.indexOf(secondPass[i]) === i) {
			
			newArr.push(secondPass[i]);
			
		}
		
	}

	console.log(newArr);
	
	console.log("-------------------------------")
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);	// [1, 3, 2, 5, 4]

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);		// [1, 3, 2, [5], [4]] 

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8]
