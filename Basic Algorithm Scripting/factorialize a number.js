function factorialize(num) {
  
  if (num < 0) {
    
    console.log("Invalid input");
    
    return;
    
  }
  
  var factNum = 1;
  
  while (num > 0) {
    
    factNum *= num;
    
    num--;
    
  }
  
  console.log(factNum);

}

factorialize(-2);