function sumAll(arr) {
	
	var min = Math.min(...arr);			// spread operator (spread syntax); only in ES6
	var max = Math.max(...arr);			// spreads (expands) an array (or other iterable) when multiple arguments (or other values) are expected
	
	var sum = 0;
	
	for (var i = min; i <= max; i++) {
		
		sum += i;
		
	}
	
	
	console.log(sum);
}


sumAll([4, 6]);
sumAll([6, 4]);
sumAll([2, 2]);
sumAll([-2, 1]);
sumAll([1, -2]);