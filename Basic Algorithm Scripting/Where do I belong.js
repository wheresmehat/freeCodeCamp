function getIndexToIns(arr, num) {
  
	var sorted = arr.sort(function(a, b) {
		
		return a - b;	
		
	});
	
	var sortIndex;
	
	for (var i = 0; i < sorted.length; i++) {
		
		if (sorted[i] === num) {
			
			sortIndex = i;
			break;			// we want to stop at the index of the first identical number so we break out of the loop
			
		}
		else if (sorted[i] < num) {
			
			sortIndex = i + 1;
			
		}
		
	}
	
	console.log(num + " ===> " + sortIndex);
	console.log(sorted);
	console.log("----------------------------");
	
}

getIndexToIns([40, 60], 50);	// 1
getIndexToIns([2, 14, 40], 120);	// 3
getIndexToIns([2, 4, 6, 120, 140], 45);	// 3
getIndexToIns([3, 10, 5], 3);	// 0
getIndexToIns([10, 20, 30, 40, 50], 30);	//2
getIndexToIns([5, 3, 20, 3], 5);		//2
getIndexToIns([2, 7, 7, 7, 7, 7, 9, 10], 7);		//1 we stopped at the index of the first identical number by using break