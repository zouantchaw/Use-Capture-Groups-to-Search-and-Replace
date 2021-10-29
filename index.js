// fixRegex should use three capture groups that will:
// Search for each word in the string 'one two three'
// Update the replaceText variable to replace 'one two three' with the string 'three two one' 
// And assign the result to the result variable


let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);
console.log(result)