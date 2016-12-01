// sums all fibonacci numbers below or equal to num

function sumFibs(num) {
	
	var sum = 0;
	
	var prevFib = 0;
	
	var nextFib = 1;
	
	var tempSum;
	
	while (nextFib <= num) {
		
		sum += nextFib;
		
		tempSum = prevFib + nextFib;	// we need tempSum because we first change prevFib and then change nextFib
		
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

