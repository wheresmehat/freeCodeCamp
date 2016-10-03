
function myReplace(str, before, after) {
  
	var beforeArr = before.split("");
	
	var afterArr = after.split("");
	
	
	if (beforeArr[0] === beforeArr[0].toUpperCase()) {
		
		afterArr.splice(0, 1, afterArr[0].toUpperCase());
		
	}
	else {
		
		afterArr.splice(0, 1, afterArr[0].toLowerCase());
		
	}
	
	
	var newStr = str.replace(before, afterArr.join(""));

	console.log(newStr);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

myReplace("His name is Tom", "Tom", "john"); // "His name is John".

myReplace("His name is tom", "tom", "John"); // "His name is john".

myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); //"He is Sitting on the couch".
