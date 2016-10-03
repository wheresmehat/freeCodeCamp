function largestOfFour(arr) {
  // You can do this!
  
  var largeArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    
    var largest = arr[i][0];
    
    for (var j = 1; j < arr[i].length; j++) {
    
      if (largest < arr[i][j]) {
        
        largest = arr[i][j];
        
      }
    
    }
    
    largeArr.push(largest);
    
  }
  
  console.log(largeArr);
  
}



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);