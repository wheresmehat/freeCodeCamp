function findLongestWord(str) {
  
  var arr = str.split(" ");
  
  var longestString = 0;
  
  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i].length > longestString) {
      
      longestString = arr[i].length;
      
    }
    
  }
  
  console.log(longestString);
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");