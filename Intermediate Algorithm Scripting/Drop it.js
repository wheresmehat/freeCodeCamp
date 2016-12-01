function dropElements(arr, func) {
	
  	var newArr;
  	
  	var index = -1;
  	
  	for (var i = 0; i < arr.length; i++) {
  		
  		if (func(arr[i])) {
  			
  			index = i;
  			break;
  		}
  		
  	}
  	
  	newArr = (index === -1) ? [] : arr.slice(index);
  	
  	console.log(newArr);
  	
}

dropElements([1, 2, 3], function(n) {return n < 3; });		// [1, 2, 3]

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); // [3, 4]

dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // [1, 0, 1]

dropElements([1, 2, 3, 4], function(n) {return n > 5;});  // []