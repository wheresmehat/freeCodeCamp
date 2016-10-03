function bouncer(arr) {
  
  console.log(arr.filter(function(element) {
  	
  	if(element) {
  		
  		return element;
  		
  	}
  	
  }));
  
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);