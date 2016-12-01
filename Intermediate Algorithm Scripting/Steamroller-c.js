function steamrollArray(arr) {
	
	var newArr = [];
  
	iter(arr);
  	
  	
  	function iter(val) {

		if (Array.isArray(val)) {
		
			for (var i = 0; i < val.length; i++) {
				//console.log("for", val[i])
				iter(val[i]);
				
			}
			
		}
		else {
			
			newArr.push(val);
			
		}
	
  	}
  	
  	console.log(newArr);
}



steamrollArray([1, [2], [3, [[4]]]]);		// [1, 2, 3, 4] 

steamrollArray([1, [2, 33, 44], [3, [[4]]]]);		// [ 1, 2, 33, 44, 3, 4 ] 

steamrollArray([1, [[[[[[2]]]]]]]);		// [ 1, 2 ]

steamrollArray([1, [], [3, [[4]]]]);		// [1, 3, 4]

steamrollArray([[["a"]], [["b"]]]);			 // ["a", "b"]

steamrollArray([1, {}, [3, [[4]]]]); 		// [1, {}, 3, 4]
