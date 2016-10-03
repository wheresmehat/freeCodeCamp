function destroyer(arr) {
	
	var filterArr = Array.prototype.slice.call(arguments, 1);
	
	console.log(arr);
	console.log(filterArr);
	
	var newArr = [];
	
	
	for (var i = 0; i < arr.length; i++) {
		
		if (filterArr.indexOf(arr[i]) === -1) {
			
			newArr.push(arr[i]);
			
		}	
		
	}	
	
		
	console.log(newArr);
	
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);