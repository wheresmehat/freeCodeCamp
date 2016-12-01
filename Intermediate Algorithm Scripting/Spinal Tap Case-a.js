// with chaining

function spinalCase(str) {
 
	var res = str.replace(/\B([A-Z])/g, "-$1")
				
				 .replace(/\s/g, "-")
	
				 .replace(/_/g, "")
	
				 .replace(/[A-Z]/g, function(match) {
		
					 return match.toLowerCase();
		
				 });
	
 	
 	console.log(res);
}

spinalCase('This Is Spinal Tap');		// this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); 	// the-andy-griffith-show
spinalCase("thisIsSpinalTap"); 			// this-is-spinal-tap
spinalCase("AllThe-small Things");		// all-the-small-things



/*

MDN 

String.prototype.replace()

Specifying a string as a parameter


$n   where n is a non-negative integer lesser than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter



examples:

http://stackoverflow.com/questions/11941487/javascript-regexp-if-a-letter-is-adjacent-to-a-number-add-an-underscore

Run str.replace(/([a-zA-Z])(\d)/g,'$1_$2') on your string. This will look for any letter followed by a number, capture both the letter and number (note the parentheses) and then replace them with an underscore between the two. $1 and $2 are callbacks to the captured letter and number found in the regular expression match.




Look for a letter followed by a number:

str = str.replace(/([a-z])(?=[0-9])/ig, '$1_');
http://regexr.com?31qsr

How this regular expression works:

([a-z]) is any lowercase letter, wrapping it in parens makes it a "matching group"
(?=[0-9]) is a "lookahead". it basically means "followed by [0-9] (any digit)"
i means ignore case (otherwise we would have to use [a-zA-Z])
g means global, or replace every match it finds (default only replaces the first one)
$1 means "first matching group", or the letter that was matched by the first bullet above.



Do a global search for "is" followed by " all":

var str = "Is this all there is";
var patt1 = /is(?= all)/g;
The marked text below shows where the expression gets a match:

Is this all there is




*/



// without chaining but with comments
/*

function spinalCase(str) {
 
	var res = str.replace(/\B([A-Z])/g, "-$1");			// "\B" NOT at beginning or end of word; "(A-Z)" all uppercase letters; "-$1" replace matched character with "-" in front of that matched character "$1"
	
	res = res.replace(/\s/g, "-");		// replace all whitespace characters with "-"
	
	res = res.replace(/_/g, "");		// replace all "_" characters with ""
	
	res = res.replace(/[A-Z]/g, function(match) {	// replace all uppercase letters with lowercase letters
		
		return match.toLowerCase();
		
	});
	
 	
 	console.log(res);
}

spinalCase('This Is Spinal Tap');		// this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); 	// the-andy-griffith-show
spinalCase("thisIsSpinalTap"); 			// this-is-spinal-tap
spinalCase("AllThe-small Things");		// all-the-small-things

*/