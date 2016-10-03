// freeCodeCamp truncate a string
// simpler

function truncateString(str, num) {
  // Clear out that junk in your trunk

  
  if (str.length > num) {
  	
  	if (num <= 3) {
      
      str = str.slice(0, num);
      return str + "...";
      
    }
    else {
      
      str = str.slice(0, num - 3);
      return str + "...";
      
    }
  }
  else {
    
    return str;
    
  }
  
}






// freeCodeCamp truncate a string


function truncateString(str, num) {
  // Clear out that junk in your trunk

  
  if (str.length <= num) {
  	
  	return str;
  	
  }
  else {
    
    if (num > 3) {
    	
    	str = str.slice(0, num - 3);
     	return str + "...";
    	
    }
    else {
    	
    	str = str.slice(0, num);
      	return str + "...";
    	
    }
    
     
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);






//repl.it



// freeCodeCamp truncate a string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  
  console.log(num);
  
  if (str.length > num) {
  	
  	if (num <= 3) {
  		
  		str = str.slice(0, num);
      	console.log(str + "...");		
  	    
  	}
  	else {
  		
  		str = str.slice(0, num - 3);
      	console.log(str + "...");
  		
  	}
  	
  }
  else {
  	
  	console.log(str);
     
  }
    

}

strng = "ABCDEF";

truncateString(strng, 1);

truncateString(strng, 2);

truncateString(strng, 3);

truncateString(strng, 4);

truncateString(strng, 5);

truncateString(strng, 6);

truncateString(strng, 7);











// freeCodeCamp truncate a string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  var tStr;
  
  console.log(num);
  
  if (str.length <= num) {
  	
  	console.log(str);
  	
  }
  else {
    
    if (num > 3) {
    	
    	tStr = str.slice(0, num - 3);
    	console.log(tStr + "...");
    
    }
    else {
    	
    	tStr = str.slice(0, num);
      	console.log(tStr + "...");
    	
    }
    
     
  }
    

}

strng = "ABCDEF";

truncateString(strng, 1);

truncateString(strng, 2);

truncateString(strng, 3);

truncateString(strng, 4);

truncateString(strng, 5);

truncateString(strng, 6);

truncateString(strng, 7);















