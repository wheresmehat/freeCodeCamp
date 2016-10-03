if (value === "") {
    
    delete collection[id][prop];

}
else if (prop === "tracks") {
    
  if (!collection[id][prop]) {    // or use hasOwnProperty("tracks")
      
    collection[id][prop] = [];
      
  }
    
  collection[id][prop].push(value);
    
}
else {
    
  collection[id][prop] = value;
    
}