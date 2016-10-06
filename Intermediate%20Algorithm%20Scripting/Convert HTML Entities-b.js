function convertHTML(str) {
  
	var replaceObj = {
		
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;"
	};
	
	
	var pattern = new RegExp(Object.keys(replaceObj).join("|"), "g");	// constructor notation for RegExp object
	
	var res = str.replace(pattern, function(match) {
		
		return replaceObj[match];
		
	});
	
	
	console.log(res);
}

convertHTML("Dolce & Gabbana");

convertHTML("Dolce & Gabbana are > than 'Versace' but < than Channel");

convertHTML('This is "SPARTA", right!');



// same but with literal notation for the RegExp object
/*
function convertHTML(str) {
  
	var replaceObj = {
		
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;"
	};
	
	
	var pattern = /&|<|>|"|'/g;				// literal notation
	
	console.log(pattern);
	
	var res = str.replace(pattern, function(match) {
		
		return replaceObj[match];
		
	});
	
	
	console.log(res);
}

convertHTML("Dolce & Gabbana");

convertHTML("Dolce & Gabbana are > than 'Versace' but < than Channel");

convertHTML('This is "SPARTA", right!');

*/