function sumAll(arr) {
	
	var min = Math.min(arr[0], arr[1]);
	var max = Math.max(arr[0], arr[1]);
	
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



// shortest version
/*

function sumAll(arr) {
	
	var sum = 0;
	
	for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
		
		sum += i;
		
	}
	
	
	console.log(sum);
}


sumAll([4, 6]);
sumAll([6, 4]);
sumAll([2, 2]);
sumAll([-2, 1]);
sumAll([1, -2]);

*/