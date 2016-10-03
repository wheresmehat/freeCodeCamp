function largestOfFour(arr) {
  
  var largeArr = [];
  
  
  arr.map(function(val) {
    
    var largest = val.reduce(function(firstVal, secondVal) {
      
      console.log(firstVal + " ," + secondVal);
      
      if (firstVal < secondVal) {
        
        firstVal = secondVal;
        
      }
      
      
      return firstVal;							// what we return gets assigned to the firstVal in the second iteration of reduce above
      
    });
    
    
    largeArr.push(largest);
    
  });
  
  
  console.log(largeArr);
  
}



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);