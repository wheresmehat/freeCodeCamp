function titleCase(str) {
  
  var arr = str.split(" ");
  
  console.log(arr);
  
  var newArr = [];
  
  
  for (var i = 0; i < arr.length; i++) {
    
    var newStr = "";
    
    newStr += arr[i][0].toUpperCase();
    
    for (var j = 1; j < arr[i].length; j++) {
      
      newStr += arr[i][j].toLowerCase();
      
    }
    
    newArr[i] = newStr;
    
  }
  
  newArr = newArr.join(" ");
  
  console.log(newArr);
}

titleCase("I'm a little tea pot");

titleCase("sHoRt AnD sToUt");

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
