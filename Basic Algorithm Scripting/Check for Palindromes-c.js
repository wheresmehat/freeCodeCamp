function palindrome(str) {
  // Good luck!
  
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  
  str = str.toLowerCase();
  
  console.log(str);
  
  console.log(str === str.split("").reverse().join(""));
  
}



palindrome("eye");
palindrome("No way!!!");  // false
palindrome("_eye");      //true
palindrome("race car"); // true
palindrome("not a palindrome");  //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("0_0 (: /-\ :) 0-0");  //true
palindrome("five|\_/|four");      // false