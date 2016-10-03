function findLongestWord(str) {
  
  var arr = str.split(" ");
  
  arr.sort(function(a, b) {
    
    return b.length - a.length;
    
  });
  
  console.log(arr[0].length);
  
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
