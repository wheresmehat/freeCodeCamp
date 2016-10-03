function truncateString(str, num) {
  	// Clear out that junk in your trunk
  	
  	var res;
  	
  	if (num > 3 && num < str.length) {
  		
  		res = str.slice(0, num - 3)	+ "...";	
  		
  	}
  	else if (num < str.length) {
  		
  		res = str.slice(0, num) + "...";
  		
  	}
  	else {
  		
  		res = str;
  	}
  	
  	console.log(res);
  	return res;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("Absolutely Longer", 2);
truncateString("A-", 1);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);