function sumAll(arr) {
	
	var min;
	var max;
	
	arr[0] <= arr[1] ? (min = arr[0], max = arr[1]) : (min = arr[1], max = arr[0]);
	
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