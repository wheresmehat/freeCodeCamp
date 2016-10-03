
// up to 9999

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
		
		
		arrRom = [["I", "V"],["X", "L"],["C", "D"],["M", "MMMMM"]];
		
		
		if (digit < 4) {
			
			rom = arrRom[power][0].repeat(digit);
	
		}
		else if (digit < 9) {
			
			rom = arrRom[power][1] + arrRom[power][0].repeat(Math.abs(digit - 5));
			
			if (numExp === 4000) {
				
				rom = arrRom[power][0].repeat(digit);
				
			} 
			else if (digit === 4)  {
				
				rom = rom.split("").reverse().join("");
				
			}
	
		}
		else {
			
			if (numExp === 9000) { 
				
				rom = arrRom[power][0].repeat(digit); 
				
			} 
			else {
				
				rom = arrRom[power][0] + arrRom[power + 1][0];
				
			}
			
		}
		
		return rom;
	}
		
		
		
	console.log(arrNum.reverse());
		
	console.log(arrCon);
	
	console.log(arrCon.join(""));
	
	console.log("-----------------------------");
	
}

convertToRoman(9);

convertToRoman(36);

convertToRoman(44);

convertToRoman(109);

convertToRoman(1385);

convertToRoman(3456);

convertToRoman(9999);






// same but with more console.logs

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
		
		
		arrRom = [["I", "V"],["X", "L"],["C", "D"],["M", "MMMMM"]];
		
		
		if (digit < 4) {
			
			rom = arrRom[power][0].repeat(digit);
			console.log(rom);
	
		}
		else if (digit < 9) {
			
			rom = arrRom[power][1] + arrRom[power][0].repeat(Math.abs(digit - 5));
			
			if (numExp === 4000) {
				
				rom = arrRom[power][0].repeat(digit);
				
			} 
			else if (digit === 4)  {
				
				rom = rom.split("").reverse().join("");
				
			}
			
			console.log(rom);	
	
		}
		else {
			
			if (numExp === 9000) { 
				
				rom = arrRom[power][0].repeat(digit); 
				
			} 
			else {
				
				rom = arrRom[power][0] + arrRom[power + 1][0];
				
			}
			
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

convertToRoman(9999);

*/


