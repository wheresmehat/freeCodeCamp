function roman(numDec, factor, power) {
	
	var firstDigit = numDec / power;
	
	var rom = "";

	var unit1 = "";
	var unit2 = "";
	var unit3 = "";
	
	switch (factor) {
		
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
	
	if (firstDigit < 4) {
		
		rom = unit1.repeat(firstDigit);
		console.log(rom);

		
	}
	else if (firstDigit < 9) {
		
		rom = unit2 + unit1.repeat(Math.abs(firstDigit - 5));
		
		firstDigit === 4 ? rom = rom.split("").reverse().join("") : null;
		
		numDec === 4000 ? rom = rom.slice(2) : null;
		
		console.log(rom);	

	}
	else {
		
		rom = unit1 + unit3;
		
		numDec === 9000 ? rom = unit2 + unit1.repeat(Math.abs(firstDigit - 5)) : null;
		
		console.log(rom);
	}
	
	return rom;
}




roman(9, 0, 1);

roman(80, 1, 10);

roman(400, 2, 100);

roman(9000, 3, 1000);