function truthCheck(collection, pre) {
  
	for (var i = 0; i < collection.length; i++) {
		
		if (!collection[i][pre]) {
			
			return false;	
			
		}
	
	}

	return true;	
}



truthCheck([{"single": "yes"}], "single");	// true

truthCheck([{"single": "double"}, {"single": undefined}], "single");	// false

//truthCheck([{"single": ""}, {"single": "double"}], "single");	// false

//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // true


//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // false




// with extraneous first condition 
/*

function truthCheck(collection, pre) {
  
	for (var i = 0; i < collection.length; i++) {
		
		if (Object.keys(collection[i]).indexOf(pre) === -1) {
			
			return false;
			
		}
		else if (!collection[i][pre]) {
			
			return false;	
			
		}
	
	}

	return true;	
}



truthCheck([{"single": "yes"}], "single");	// true

truthCheck([{"single": "double"}, {"single": undefined}], "single");	// false

//truthCheck([{"single": ""}, {"single": "double"}], "single");	// false

//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // true


//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // false

*/