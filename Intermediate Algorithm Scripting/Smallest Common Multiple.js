function smallestCommons(arr) {
  
  	if (arr.length === 1) {
		
		console.log("Enter an array with at least two numbers.");
		return;
	}
	
	var arrObjFact = [];
	
	if (arr[0] > arr[1]) {
		
		arr.reverse();
		
	}
	
	for (var i = arr[0]; i <= arr[1]; i++) {
		
		arrObjFact.push(allFactors(i, primeFact(i)));
		
	}
	
	console.log(arrObjFact);
	
	var obj = {};
	
	for (var j = 0; j < arrObjFact.length; j++) {
		
		var keys = Object.keys(arrObjFact[j]);
		
		for (var k = 0; k < keys.length; k++) {
			
			if (obj.hasOwnProperty(keys[k]) && obj[keys[k]] < arrObjFact[j][keys[k]]) {
				
				obj[keys[k]] = arrObjFact[j][keys[k]];
				
			}
			else if (!obj.hasOwnProperty(keys[k])) {
				
				obj[keys[k]] = arrObjFact[j][keys[k]];	
			}
			
		}
		
	}

	console.log(obj);
	
	var factors = Object.keys(obj);
	
	var leastCommonMultiple = factors.reduce(function(total, current, index) {
		
		return total * (Math.pow(factors[index], obj[current])); 	
		
	}, 1);
	
	console.log(leastCommonMultiple);
}



function primeFact(num) {
	
	if (num == 1) {
		
		return;
	}
  
  	var factArr = [];

	for (var i = 2; i <= Math.floor(num / 2); i++) {
	
		var prime = true;
		
		
		for (var j = Math.floor(Math.sqrt(i)); j > 1; j--) {
		
			if (i % j === 0) {
				
				prime = false;
					
				break;
			
			}
			
		}
		
		if (prime && num % i === 0) {
			
			factArr.push(i);
			
		}
	}
	
	if (!factArr.length) {
		
		factArr.push(num);
	}
  
  	return factArr;
}



function allFactors(num, arr) {
	
	if (num == 1) {
		
		return {"1": 1};
	}
	
	var factObj = {};
	
	var i = 0;
	
	while (i < arr.length) {
		
		if (num % arr[i] === 0) {
			
			num = num / arr[i];
			
			factObj[arr[i]] = (factObj[arr[i]] || 0) + 1;
			
		}
		else {
			
			i++;
		}
		
	}
	
	console.log(factObj);
	
	return factObj;
}




smallestCommons([23, 18]);






