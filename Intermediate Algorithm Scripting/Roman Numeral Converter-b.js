// up to 9999

function convertToRoman(num) {
	
	var strNum = num.toString();
	
	var arrNum = strNum.split("").reverse();	// we reverse the array so the ones are first, the tens are second etc.
	
	var length = arrNum.length;
	
	var arrCon = [];
	
	for (var i = length - 1; i >= 0; i--) {		// because we reversed the array we can start at the end of the array, with thousands for example and now if we raise 10 to the power of "i" we get thousand
		
		
		arrCon.push(roman(arrNum[i], i));	// we pass in the first string, e.g. for 2367 it would be a "2" (thousands place) and the "i" which is 3 (and 10 to the power of 3 is 1000); so we pass in (2, 3), (3, 2), (6, 1), (7, 0)
		
	}
	
	
	function roman(strDigit, power) {	// takes the string digit and the power to which 10 is raised to give us that digits place (ones, tens, hundreds...)
		
		var digit = parseInt(strDigit, 10);		// converting to number so we can do strict equality with numbers later
	
		var power10 = Math.pow(10, power);		// 10^0 = 1, 10^1 = 10, 10^2 = 100; for ones is 1, tens 10, hundreds 100
	
		var numExp = digit * power10;			// expand the number; e.g. 2367 gave us an array [2, 3, 6, 7] and we expand each number to 2000, 300, 60 and 7 respectively
		
		var rom = "";
	
		var unit1 = "";
		var unit2 = "";
		var unit3 = "";
		
		switch (power) {		// depending on the range of our number we choose the correct roman numerals
			
			case 0:				// 10^0 gives us ones
				
				unit1 = "I";
				unit2 = "V";
				unit3 = "X";
				break;
			
			case 1:			// 10^1 gives us tens
				
				unit1 = "X";
				unit2 = "L";
				unit3 = "C";
				break;
			
			case 2:			// 10^2 gives us hundreds
				
				unit1 = "C";
				unit2 = "D";
				unit3 = "M";
				break;
			
			case 3:			// 10^3 gives us thousands
				
				unit1 = "M";
				unit2 = "MMMMM";
				break;	
		}
		
		if (digit < 4) {					// less than 4 is easy: "III", "XXX", "CCC", "MMM"  
			
			rom = unit1.repeat(digit);
			console.log(rom);
	
			
		}
		else if (digit < 9) {			// between [4 and 9), not including 9 
			
			rom = unit2 + unit1.repeat(Math.abs(digit - 5));	// "V" + "I" repeated  
			
			if (numExp === 4000) {				// exception for 4000
				
				rom = unit1.repeat(digit);		// we used "MMMMM" as the 5000 numeral and now we can't use reversal like we do below for all other 4 based numerals, so we just repeat "M" for 4000 "MMMM"
				
			} 
			else if (digit === 4)  {			// for other numbers with 4 (4, 40, 400)
				
				rom = rom.split("").reverse().join("");		// we just reverse what we got on the first line of else if statement above ("VI" -> "IV", "LX" -> "XL")
				
			}
			
			console.log(rom);	
	
		}
		else {							// digit is 9
			
			rom = unit1 + unit3;
			
			if (numExp === 9000) { rom = unit1.repeat(digit); } 	// again we don't have a special numeral for 10000 so we just repeat "M"
			
			console.log(rom);
		}
		
		return rom;
	}
		
		
		
	console.log(arrNum.reverse());			// reverse array just for better presentation
		
	console.log(arrCon);
	
	console.log(arrCon.join(""));			// convert array to string
	
	console.log("----------------------");
	
}

convertToRoman(9);

convertToRoman(36);

convertToRoman(44);

convertToRoman(109);

convertToRoman(1385);

convertToRoman(3456);

convertToRoman(5000);








// same but without the comments
/*


function convertToRoman(num) {
	
	var strNum = num.toString();
	
	var arrNum = strNum.split("").reverse();
	
	var length = arrNum.length;
	
	var arrCon = [];
	
	for (var i = length - 1; i >= 0; i--) {		
		
		
		arrCon.push(roman(arrNum[i], i));
		
	}
	
	
	function roman(strDigit, power) {
		
		var digit = parseInt(strDigit, 10);
	
		var power10 = Math.pow(10, power);
	
		var numExp = digit * power10;		
		
		var rom = "";
	
		var unit1 = "";
		var unit2 = "";
		var unit3 = "";
		
		switch (power) {
			
			case 0:
				
				unit1 = "I";
				unit2 = "V";
				unit3 = "X";
				break;
			
			case 1:
				
				unit1 = "X";
				unit2 = "L";
				unit3 = "C";
				break;
			
			case 2:
				
				unit1 = "C";
				unit2 = "D";
				unit3 = "M";
				break;
			
			case 3:
				
				unit1 = "M";
				unit2 = "MMMMM";
				break;	
		}
		
		if (digit < 4) {
			
			rom = unit1.repeat(digit);
			console.log(rom);
	
			
		}
		else if (digit < 9) {
			
			rom = unit2 + unit1.repeat(Math.abs(digit - 5));
			
			if (numExp === 4000) {
				
				rom = unit1.repeat(digit);
				
			} 
			else if (digit === 4)  {
				
				rom = rom.split("").reverse().join("");
				
			}
			
			console.log(rom);	
	
		}
		else {
			
			rom = unit1 + unit3;
			
			if (numExp === 9000) { rom = unit1.repeat(digit); } 
			
			console.log(rom);
		}
		
		return rom;
	}
		
		
		
	console.log(arrNum.reverse());
		
	console.log(arrCon);
	
	console.log(arrCon.join(""));
	
	console.log("----------------------");
	
}

convertToRoman(9);

convertToRoman(36);

convertToRoman(44);

convertToRoman(109);

convertToRoman(1385);

convertToRoman(3456);

convertToRoman(5000);



*/