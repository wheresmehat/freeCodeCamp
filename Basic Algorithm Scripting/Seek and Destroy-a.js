function destroyer(arr) {
	
	var filterArr = Array.prototype.slice.call(arguments, 1);  // borrowing the slice method from Array.prototype because arguments is not a real array, just a array like object
	
	console.log(arr);
	console.log(filterArr);
	
	var newArr = [];
	
	
	arr.map(function(element) {
		
		if (filterArr.indexOf(element) === -1) {
			
			newArr.push(element);
			
		}	
		
	});	
	
		
	console.log(newArr);
	
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);