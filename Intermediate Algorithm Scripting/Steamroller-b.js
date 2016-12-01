function steamrollArray(arr) {
  
	var newArr = arr.join().split(",");
	
	console.log(newArr);
	
	var filtArr = [];
	
	for (var i = 0; i < newArr.length; i++) {
		
		if (newArr[i] === "") {
		
			continue;
		}
		else if (newArr[i] === "[object Object]") {
		
			filtArr.push({});
		}
		else if (!isNaN(newArr[i])) {
			
			filtArr.push(parseInt(newArr[i], 10));	
		}
		else {
			
			filtArr.push(newArr[i]);
			
		}
		
	}
	
	console.log(filtArr);
  	
}

	


steamrollArray([1, [2], [3, [[4]]]]);		// [1, 2, 3, 4] 

steamrollArray([1, [], [3, [[4]]]]);		// [1, 3, 4]

steamrollArray([[["a"]], [["b"]]]);			 // ["a", "b"]

steamrollArray([1, {}, [3, [[4]]]]); 		// [1, {}, 3, 4]

