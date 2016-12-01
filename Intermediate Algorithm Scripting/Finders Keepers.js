
function findElement(arr, func) {
	
	var numArr = arr.filter(func);
	
	console.log(numArr);
	
	return numArr[0];
	
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

findElement([3, 5, 7, 9], function(num){ return num % 2 === 0; });




// using a for loop
/*

function findElement(arr, func) {
	
	var num;
	
	for (var i = 0; i < arr.length; i++) {
		
		if (func(arr[i])) {
			
			num = arr[i];
			
			return num;
		}
		
	}
	
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

findElement([3, 5, 7, 9], function(num){ return num % 2 === 0; });

*/