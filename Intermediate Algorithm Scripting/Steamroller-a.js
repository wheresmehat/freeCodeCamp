// using Number and Array toString() Method
/*
[1, [2], [3, [[4]]]].toString(); // '1,2,3,4'

[2].toString();		// '2'

[[4]].toString()	// '4'


var arr = [1, 2, 3, 4];


console.log(arr[2].toString())	// 3 

The Number object overrides the toString() method of the Object object

the toString() method is generic and can be used with any object. If the object has a join() method, it will be called and that value will be returned

3.toString() throws error: SyntaxError: Invalid or unexpected token
(3).toString() works!

No, the parentheses are just letting the parser understand that the . is not a decimal point.

12345 .toString() will also work.

Primitive numbers implicitly converted to Numbers whenever you access their properties, but the objects are temporary and immediately lost.


we could have used var newStr = arr[i] + ""; instead of the toString() method to coerce values to strings

*/

function steamrollArray(arr) {
  
  	var newArr = [];
  	
  	for (var i = 0; i < arr.length; i++) {
  		
  		if(Array.isArray(arr[i]) && arr[i].length === 0) {
  			
  			continue;
  			
  		}
  		else if (!Array.isArray(arr[i]) && typeof arr[i] === "object") {
  			
  			newArr.push(arr[i]);
  			
  		}
  		else {
  			
  			var newStr = arr[i].toString();
 
  			isNaN(parseInt(newStr, 10)) ? newArr.push(newStr) : newArr.push(parseInt(newStr, 10));
  	
  			if (newStr.length > 1) {
  			
  				for (var j = 2; j < newStr.length; j+=2) {
  					
  					isNaN(parseInt(newStr, 10)) ? newArr.push(newStr[j]) : newArr.push(parseInt(newStr[j], 10));
  				
  				}
	  			
	  		}	
  			
  		}
  		
  	}
  	
  	console.log(newArr);
}


steamrollArray([1, [2], [3, [[4]]]]);		// [1, 2, 3, 4] 

steamrollArray([1, [], [3, [[4]]]]);		// [1, 3, 4]

steamrollArray([[["a"]], [["b"]]]);			 // ["a", "b"]

steamrollArray([1, {}, [3, [[4]]]]); 		// [1, {}, 3, 4]