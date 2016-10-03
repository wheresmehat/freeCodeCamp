function reverseString(str) {
  
  var arr = str.split("");
  
  arr.reverse();
  
  var revStr = arr.join("");
  
  console.log(revStr);
  
}

reverseString("hello");