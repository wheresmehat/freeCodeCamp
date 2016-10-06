
function uniteUnique(arr) {
	
	var firstPass = [].concat.apply([], arguments);	// [] is a somewhat "dirty" shortcut for Array.prototype
		/*
		[].concat.apply([], arguments); uniteUnique is given three arrays , but it only takes one argument; so we have to use "arguments" which wrapps all three arguments into an array-like object; then we use apply which takes an array of arguments and so it unwraps the array of "arguments" into three arrays and passes it to concat  
		*/
	console.log(firstPass);
	
	var newArr = [firstPass[0]];
	
	
	for (var i = 1; i < firstPass.length; i++) {
		
		if (firstPass.indexOf(firstPass[i]) === i) {
			
			newArr.push(firstPass[i]);
			
		}
	
	}

	console.log(newArr);
	
	console.log("-------------------------------");
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);	// [1, 3, 2, 5, 4]

uniteUnique([1, 3, 2], [1, [5]], [2, [5], [4]]);		// [1, 3, 2, [5], [5], [4]] 	// arrays can't be compared, [5] === [5] returns false because arrays are objects and are compared by reference and not by value

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8]



// same, with self-explanatory name "flatten"
/*
function uniteUnique(arr) {
	
	var flatten = [].concat.apply([], arguments);	
	
	var newArr = [flatten[0]];
	
	
	for (var i = 1; i < flatten.length; i++) {
		
		if (flatten.indexOf(flatten[i]) === i) {
			
			newArr.push(flatten[i]);
			
		}
	
	}

    console.log(newArr);
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);	// [1, 3, 2, 5, 4]

uniteUnique([1, 3, 2], [1, [5]], [2, [5], [4]]);		// [1, 3, 2, [5], [5], [4]] 	// arrays can't be compared, [5] === [5] returns false because arrays are objects and are compared by reference and not by value

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8]

*/