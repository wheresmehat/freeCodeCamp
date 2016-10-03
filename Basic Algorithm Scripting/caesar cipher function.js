function rotate(letter, caesarIndex) {

	var str = letter;
	
	var rotateBy = caesarIndex;
	
	var addAscii = 65;  // works with upper case letters only, that's why we use 65 (upper case letters are from 65 to 90)
	
	
	var charCode = str.charCodeAt(0);
	
	console.log("str:         " + str + "\n" + "charCode:   " + charCode);
	
	
	var distanceFromStart = charCode - addAscii + rotateBy; // the distance from the first letter ("A" on 65) in absolute terms AFTER we rotate
	
	console.log("\nrotateBy: " + rotateBy);
	console.log("distanceFromStart:  " + distanceFromStart);
	console.log("distanceFromStart % 26: " + (distanceFromStart % 26) + "\n");
	
	
	var cipherCode = (distanceFromStart % 26) + addAscii ;	// (distanceFromStart % 26) gives us how far we are from "A" or 65 after rotation; (there are 26 letters, so "A" at 65 is first and "Z" at 90 is last(1 + 25)); so if we have gone more than 25 letters from "A" we have to wrap around and start from 65 again; to get the correct ASCII code we add 65
	
	var cipherStr = String.fromCharCode(cipherCode);
	
	console.log("cipherCode: " + cipherCode + "\n" + "cipherStr:   " + cipherStr);
	
	console.log("-----------------------------");

}

rotate("A", 13);
rotate("B", 13);
rotate("M", 13);
rotate("N", 13);
rotate("O", 13);
rotate("P", 13);
rotate("Y", 13);
rotate("Z", 13);


