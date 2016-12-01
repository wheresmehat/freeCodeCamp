// faster method, with sqrt of i
// An integer is prime if it is not divisible by any prime less than or equal to its square root


function sumPrimes(num) {
  
  	var total = 0;

	for (var i = 2; i <= num; i++) {
		
		var prime = true;
		
		/*
		
		An integer is prime if it is not divisible by any prime less than or equal to its square root

A number, n, is a prime if it isn't divisible by any other number other than by 1 and itself. Also, it's sufficient to check the numbers [2, sqrt(n)]


		a and b are a pair of factors of i;   i = a * b
		n is the square root of i; i = n * n
		
		if one of the factors is smaller than n, the other has to be bigger than n; a < n && b > n (or equal a === n && b === n)
		
		so we check just the factors smaller than n (or equal);

		we modulo divide the number i with the factor; i % f === 0	

		if that smaller (or equal) factor doesn't exist, the larger one can't exist either
		
		if there are no factors the number i is prime
		
		example:
		
		Math.floor(Math.sqrt(11)) = 3;
				
							11 % 3 === 0 //false
							11 % 2 === 0 //false
							11 is prime
							
		Math.floor(Math.sqrt(12)) = 3;
				
							12 % 3 === 0 //true; we break and end the loop; the other factor is 4
							12 % 2 === 0 //true; the other factor is 6
							12 is NOT prime
							
		
		http://stackoverflow.com/questions/5811151/why-do-we-check-upto-the-square-root-of-a-prime-number-to-determine-if-it-is-pri
		
		in the loop below the smaller factor is j; we excluded 1 as the factor					
		*/
		
		for (var j = Math.floor(Math.sqrt(i)); j > 1; j--) {
			
			if (i % j === 0) {
				
				prime = false;
					
				break;
			
			}
			
		}
		
		if (prime) {
			
			total += i;
			
		}
	}
  
  	console.log(total);
}

sumPrimes(2);		// 2

sumPrimes(10);		// 17

sumPrimes(977);    // 73156