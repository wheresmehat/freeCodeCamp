function convertHTML(str) {
  
	var replaceObj = {
		
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;"
	};
	
	
	var res = str.replace(/&|<|>|"|'/g, function(match) {
		
		return replaceObj[match];
		
	});
	
	console.log(res);
	
}

convertHTML("Dolce & Gabbana");

convertHTML("Dolce & Gabbana are > than 'Versace' but < than Channel");

convertHTML('This is "SPARTA", right!');

