function whatIsInAName(collection, source) {
	
	var arr = [];
	
	var sourceKeys = Object.keys(source);
	
	
	for (var i = 0; i < collection.length; i++) {
	  
		checkPropValue(collection[i]); 
	  
	}
	
	
	function checkPropValue(objCheck) {
		
		var boolCheck = true;
		
		
		for (var j = 0; j < sourceKeys.length; j++) {
			
			if (!(objCheck.hasOwnProperty(sourceKeys[j]) && objCheck[sourceKeys[j]]  === source[sourceKeys[j]])) {
				
				boolCheck = false; 

				break;
			}
			
		}
		
		
		if (boolCheck) {
			
			arr.push(objCheck);
			
		}
	}
  
  	console.log(arr);
  	
  	console.log("-----------------------------------------");
 
}

whatIsInAName([{a: 5}], {boy: "Romeo", girl: "Julia", subject: "love", ending: "tragic", means: "poison"});

whatIsInAName([{c:45, a: 2}, {a: 2, b: 3}, {b: 3}], {a: 2, b: 3, v: 5});


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });




// same, with console.logs
/*

function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line
	
	var sourceKeys = Object.keys(source);
	
	console.log(sourceKeys);
	
	for (var i = 0; i < collection.length; i++) {
	  
		checkPropValue(collection[i]); 
	  
	}
	
	function checkPropValue(objCheck) {
		
		var boolCheck = true;
		
		for (var j = 0; j < sourceKeys.length; j++) {
			
			if (!(objCheck.hasOwnProperty(sourceKeys[j]) && objCheck[sourceKeys[j]]  === source[sourceKeys[j]])) {
				
				boolCheck = false; 
				console.log("First false! Break out of the loop, j:", j);
				break;
			}
			
		}
		
		console.log(boolCheck);
		
		if (boolCheck) {
			
			arr.push(objCheck);
			
		}
	}
  
  	console.log(arr);
  	
  	console.log("---------------------------------------");
 	// Only change code above this line
	return arr;
}

whatIsInAName([{a: 5}], {boy: "Romeo", girl: "Julia", subject: "love", ending: "tragic", means: "poison"});

whatIsInAName([{c:45, a: 2}, {a: 2, b: 3}, {b: 3}], {a: 2, b: 3, v: 5});


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

*/