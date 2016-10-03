function titleCase(str) {
  
  var arr = str.split(" ");
  
  console.log(arr);
  
  
  var newStr = "";
  
  
  for (var i = 0; i < arr.length; i++) {
    
    newStr += arr[i][0].toUpperCase();
    
    for (var j = 1; j < arr[i].length; j++) {
      
      newStr += arr[i][j].toLowerCase();
      
    }
    
    newStr += " ";
    
  }
  
  newStr = newStr.substr(0, newStr.length - 1);
  
  console.log(newStr);
}

titleCase("I'm a little tea pot");

titleCase("sHoRt AnD sToUt");

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
