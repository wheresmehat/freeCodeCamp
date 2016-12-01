// DON'T USE! RANGE ERROR WITH BIGGER NUMBERS

// BRUTE FORCE METHOD


function smallestCommons(arr) {
  
	if (arr[0] > arr[1]) {
		
		arr.reverse();
		
	}
	
	
	var newArr = [];
	
	for (var i = arr[0]; i <= arr[1]; i++) {
		
		newArr.push(i);
		
	}
	
	
	var multiple = arr[1];
	
	var found = true;
	
	function recurse() {
			
		for (var j = 0; j < newArr.length - 1; j++) {
			
			if (multiple % newArr[j] !== 0) {
		
				found = false;
				break;
			}
			else {
				
				found = true;	
				
			}
			
		}
		
		if (!found) {
			
			multiple += arr[1];
			
			recurse();
			
		}
		
		
	}
	
	recurse();
	
	console.log(multiple);
	
}


smallestCommons([1, 4]);

smallestCommons([5, 1]);

smallestCommons([5, 10]);

/* don't use */
//smallestCommons([1, 16]);// RangeError: Maximum call stack size exceeded
