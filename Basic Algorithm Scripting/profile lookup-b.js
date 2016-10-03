
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  
  var noContact = true;
  
  for (var i = 0; i < contacts.length; i++) {
    
    if (contacts[i].firstName === firstName) {
    
      noContact = false;
      
      if (contacts[i][prop]) {
              
        console.log(contacts[i][prop]);
        
      }
      else {
        
        console.log("No such property");
        
      }
      
    }
    
  }
  
  if (noContact) {
    
    console.log("No such contact");
    
  }
  
  
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry","likes");
console.log("1---------1")
lookUpProfile("Akira", "address");
console.log("2---------2")
lookUpProfile("Bob", "number");
console.log("3---------3")
lookUpProfile("Sloth", "likes");


