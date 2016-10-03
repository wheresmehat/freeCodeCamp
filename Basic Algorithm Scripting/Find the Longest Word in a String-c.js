function findLongestWord(str) {
  
  var arr = str.split(" ");
  
  var red = arr.reduce(function(prev, curr) {
    
    return prev.length > curr.length ? prev : curr;
    
  });
  
  console.log(red.length);
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
