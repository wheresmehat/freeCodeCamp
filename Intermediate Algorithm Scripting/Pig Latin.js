function translatePigLatin(str) {
	
	var pigStr;
	
	var vowArr = ["a", "e", "i", "o", "u"];
	
	var vowInd = 1;
	
	
	if (vowArr.indexOf(str[0]) ===  -1) {		// str begins with a consonant
	
		vowelFind();							
	
		pigStr = str.substring(vowInd) + str.substring(0, vowInd) + "ay";
		
	}
	else {										// str begins with a vowel
		
		pigStr = str + "way";
		
	}
	
	
	function vowelFind() {			// sets the vowInd to the index of the first vowel
		
		if (vowArr.indexOf(str[vowInd]) === -1) {		// we begin with the second letter (str[vowInd]; vowInd is 1), because we already checked the 0th index in the above if statement
			
			vowInd++;
			
			vowelFind();		// recursive call until we find a vowel, vowInd is incremented each time
			
		}	
	
	}
	

	console.log(pigStr);
}


translatePigLatin("california"); 	// aliforniacay

translatePigLatin("consonant");		// onsonantcay

translatePigLatin("glove"); 		// oveglay (consonant cluster)

translatePigLatin("strudel");		// udelstray (consonant cluster)

translatePigLatin("eight");			// eightway

translatePigLatin("algorithm");      //algorithmway







