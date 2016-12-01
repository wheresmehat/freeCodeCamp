function sumFibs(num) {
	
	var sum = 0;
	
	var prevFib = 0;		// we are using the fibonacci sequence that starts with zero
	
	var nextFib = 1;
	
	var tempNextFib;
	
	while (nextFib <= num) {
		
		if (nextFib % 2 !== 0) {	// if nextFib is odd, add it to sum
			
			sum += nextFib;
			
		}		
		
		tempNextFib = nextFib;		// we need a temporary storage for the value of nextFib because we are changing it on the next line, but we want to assign prevFib the old value of nextFib

		nextFib = prevFib + nextFib;

		prevFib = tempNextFib;
		
		
		console.log(prevFib + " ----- " + nextFib + " ------ " + sum);
		
	}
	
	console.log("Sum: " + sum);
	
	console.log("-------------------------");
}

sumFibs(1);

sumFibs(4);		

sumFibs(10);

sumFibs(20);	

sumFibs(75024) // 60696



// same but different temp value and ternary operator
/*

function sumFibs(num) {
	
	var sum = 0;
	
	var prevFib = 0;
	
	var nextFib = 1;
	
	var tempSum;
	
	while (nextFib <= num) {
		
		sum += nextFib % 2 !== 0 ? nextFib : 0;		// if nextFib is odd, add it to sum, otherwise add 0
		
		tempSum = prevFib + nextFib;	// we need tempSum because we need to assign nextFib to prevFib; and then assign the sum of the (previous value of prevFib and nextFib) to nextFib
		
		prevFib = nextFib;
		
		nextFib = tempSum;
		
		console.log(prevFib + " ----- " + nextFib + " ------ " + sum);
		
	}
	
	console.log("Sum: " + sum);
	
	console.log("-------------------------");
}

sumFibs(1);

sumFibs(4);		

sumFibs(10);

sumFibs(20);	

sumFibs(75024) // 60696


*/