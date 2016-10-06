function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
	if (bool === true || bool === false) {
  	
  		console.log(true);
  	
  	}
  	else {
  		
  		console.log(false);
  		
  	}
  
}


booWho(true);		// true
booWho(false);		// true
booWho(null);		// false
booWho([1, 2, 3]);	// false
booWho({ "a": 1 });	// false
booWho(NaN);		// false
booWho("a");		// false
booWho("true");		// false




// using typeof
/*
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
	if (typeof(bool) === "boolean") {
  	
  		console.log(true);
  	
  	}
  	else {
  		
  		console.log(false);
  		
  	}
  
}


booWho(true);		// true
booWho(false);		// true
booWho(null);		// false
booWho([1, 2, 3]);	// false
booWho({ "a": 1 });	// false
booWho(NaN);		// false
booWho("a");		// false
booWho("true");		// false
*/
