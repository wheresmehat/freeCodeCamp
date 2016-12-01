function sumPrimes(num) {
  
  	var total = 0;

	for (var i = 2; i <= num; i++) {
		
		var prime = true;
		
		for (var j = i - 1; j > 1; j--) {
			
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