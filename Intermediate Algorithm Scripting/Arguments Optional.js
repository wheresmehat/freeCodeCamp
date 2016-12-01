function addTogether(par1, par2) {
	
	function sumAnd(otherNum) {
		
		if (Number.isFinite(otherNum)) {
		
			return par1 + otherNum;
		}
	}
	
	if (Number.isFinite(par1) && Number.isFinite(par2)) {
		
		return par1 + par2;
		
	}
	else if (Number.isFinite(par1) && par2 === undefined) {
		
		return sumAnd;	
		
	}
	
}

addTogether(2, 3);	// 5;

//addTogether(2)(3);	//5

//addTogether("http://bit.ly/IqT6zt");	// undefined

//addTogether(2, "3");	// undefined

//addTogether(2)([3]);	// undefined

/* Number.isFinite()
In comparison to the global isFinite() function, this method doesn't forcibly convert the parameter to a number. This means only values of the type number, that are also finite, return true.
*/
