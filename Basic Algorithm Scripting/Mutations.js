function mutation(arr) {
 
	var str1 = arr[0].toLowerCase();
  
  	var str2 = arr[1].toLowerCase();
  
  	console.log(str1 + " " + str2);
  
	
	for (var i = 0; i < str2.length; i++) {
  	
  		if (str1.indexOf(str2[i]) === -1) {
  			
  			console.log(false);
  			return false;
  		
  		}
  	
	}
  
 	console.log(true);
	return true;
}

mutation(["hello", "hey"]);

mutation(["hello", "Hello"]);

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

mutation(["Mary", "Army"]);

mutation(["floor", "for"]);

mutation(["hello", "neo"]);