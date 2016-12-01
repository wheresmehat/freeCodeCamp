
function spinalCase(str) {
 
	var res1 = str.replace(/\B([A-Z])/g, "-$1");			// "\B" NOT at beginning or end of word; "(A-Z)" all uppercase letters; "-$1" replace matched character with "-" in front of that matched character "$1"
	
	res2 = res1.replace(/\s/g, "-");		// replace all whitespace characters with "-"
	
	res3 = res2.replace(/_/g, "");		// replace all "_" characters with ""
	
	res4 = res3.replace(/[A-Z]/g, function(match) {	// replace all uppercase letters with lowercase letters
		
		return match.toLowerCase();
		
	});
	
	console.log(str);
 	console.log(res1);
 	console.log(res2);
 	console.log(res3);
 	console.log(res4);
 	console.log("------------------------------");
}

spinalCase('This Is Spinal Tap');		// this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); 	// the-andy-griffith-show
spinalCase("thisIsSpinalTap"); 			// this-is-spinal-tap
spinalCase("AllThe-small Things");		// all-the-small-things



// rafase solution
/*

function spinalCase(str) {
 
	var res = str.replace(/([a-z])([A-Z])/g, "$1 $2")
	
				 .replace(/\s|_/g, "-").toLowerCase();
				
			
	console.log(res);
}

spinalCase('This Is Spinal Tap');		// this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); 	// the-andy-griffith-show
spinalCase("thisIsSpinalTap"); 			// this-is-spinal-tap
spinalCase("AllThe-small Things");		// all-the-small-things
*/