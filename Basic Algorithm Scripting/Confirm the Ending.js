function confirmEnding(str, target) {
 
  console.log(str.substr(str.length - target.length) === target);
  
}

confirmEnding("Bastian", "n");

confirmEnding("Connor", "n");

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

confirmEnding("Open sesame", "same");