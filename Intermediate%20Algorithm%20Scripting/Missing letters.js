function fearNotLetter(str) {
  
	var missingLet;
	
	var charCode = str.charCodeAt(0);
	
	for (var i = 1; i < str.length; i++) {
		
		if (str.charCodeAt(i) === charCode + 1) {
			
			charCode = str.charCodeAt(i);
			
		}
		else {
			
			missingLet = String.fromCharCode(charCode + 1);
			
			charCode = str.charCodeAt(i);
			
		}
		
	}
	
	console.log(missingLet);
}


fearNotLetter("ac");				//b

fearNotLetter("abce");				// d

fearNotLetter("abcdefghjklmno");	// i

fearNotLetter("bcd");				// undefined

fearNotLetter("yz");				// undefined

