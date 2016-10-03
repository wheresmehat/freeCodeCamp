function rot13(str) {
		
	var upperStr = str.toUpperCase();
	
	var arr = upperStr.split("");
	
	var newArr = [];
	
	
	for (var i = 0; i < arr.length; i++) {
		
		var charCode = arr[i].charCodeAt(0);
		
		
		if (charCode >= 65 && charCode <= 90) {
			
			var rotateBy = 13;
			
			var addAscii = 65;  
			
			
			var distanceFromStart = charCode - addAscii + rotateBy; 
			
			var cipherCode = (distanceFromStart % 26) + addAscii;	
			
			var cipherStr = String.fromCharCode(cipherCode);
			
			
			newArr.push(cipherStr);
			
		}
		else {
			
			newArr.push(arr[i]);
			
		}
		
	}
  
  	
  	var decodedString = newArr.join("");
  
  
  	console.log(decodedString);
}


rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("free me!?!");
rot13("serr zr!?!");
rot13("SERR CVMMN!");	// FREE PIZZA!
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
