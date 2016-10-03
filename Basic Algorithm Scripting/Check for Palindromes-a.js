
function palindrome(str) {
  // Good luck!
  
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  
  str = str.toLowerCase();
  
  var arrStr = str.split("");
  
  var revStr = [];
  
  for (var i = 0; i < arrStr.length; i++) {
    
    revStr.unshift(arrStr[i]);
    
  }
  
  revStr = revStr.join("");
  
  
  //console.log(str);
  
  //console.log(arrStr);
  
  //console.log(revStr);
  
  console.log(str === revStr);
  
}



palindrome("eye");
palindrome("_eye");      //true
palindrome("race car"); // true
palindrome("not a palindrome");  //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("0_0 (: /-\ :) 0-0");  //true
palindrome("five|\_/|four");      // false