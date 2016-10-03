function titleCase(str) {
  
  var arr = str.split(" ");
  
  console.log(arr);
  
  var newStr = "";
  
  arr.map(function(val) {
       
    newStr += val[0].toUpperCase();
    
    for (var i = 1; i < val.length; i++) {
    
      newStr += val[i].toLowerCase();
      
    }
    
    newStr += " ";
    
  });
  
  newStr = newStr.substr(0, newStr.length - 1);
  
  
  console.log(newStr);
  
}

titleCase("I'm a little tea pot");

titleCase("sHoRt AnD sToUt");

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
