function repeatStringNumTimes(str, num) {
  	// repeat after me
  	
  	var repStr = "";
	  
  	for (var i = 0; i < num; i++) {
  		
  		repStr += str ;
  		
  	}
	
	console.log(repStr);
	return repStr;

}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);