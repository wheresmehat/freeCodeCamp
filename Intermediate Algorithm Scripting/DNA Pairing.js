﻿function pairElement(str) {
	
	var outerArr = [];
	
	for (var i = 0; i < str.length; i++) {
		
		var basePair = [str[i]];
		
		basePair[1] = str[i] === "G" ? "C" : str[i] === "C" ? "G" : str[i] === "A" ? "T" : "A";
		
		outerArr.push(basePair);
		
	}
	
	console.log(outerArr);
}


pairElement("GCA");	   // [["G","C"],["C","G"],["A","T"]]
pairElement("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]