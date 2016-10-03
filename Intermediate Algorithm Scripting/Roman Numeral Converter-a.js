
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
			
			digit === 4 ? rom = rom.split("").reverse().join("") : null;
			
			numExp === 4000 ? rom = rom.slice(2) : null;
			
			console.log(rom);	
	
		}
		else {
			
			rom = unit1 + unit3;
			
			numExp === 9000 ? rom = unit2 + unit1.repeat(Math.abs(digit - 5)) : null;
			
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


