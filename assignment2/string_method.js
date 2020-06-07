var char = "The former two-division UFC World Champion said he was done fighting in a statement posted to his verified Twitter early Sunday morning.-from UFC";
var value = "UFC";
var missing = "ball";
console.log(char.indexOf(value)); //return the index of first occurence of  the specified value;  here ,return 24
console.log(char.indexOf(missing)); //Return -1 if the value is not found.
console.log(char.lastIndexOf(value));//return the index of last occurence of  the specified value;  here ,return 142

var expression = /[A]/g;
var expression1 =/[F]/g
console.log(char.search(expression));// search the statement that satisfy the expression. Here, there is no capital A in char.
console.log(char.search(expression1));//return 25 the first occurence of F.
console.log(char.slice(0, 3));// the first index is the first index of the value that will be returned and second is the last index of the value but is not included.
                              //therefore, it should return [The]
console.log(char.slice(7, 13));//return [mer tw] 
console.log(char.substring(7, 13))
console.log(char.substr(7, 6))//for the substr, the second index is the length of the selected value.
console.log('..........')
console.log(char.slice(7, -1))//=>char.slice(7, 144)
console.log('..........')
console.log(char.substring(7, -1))//=>char.substring(7,0)=>char.substring(0,7);
console.log('..........')
console.log(char.substr(7, -1))//=>char.substring(7,0)
console.log('..........')
console.log(char.slice(-4))//=>char.slice(141)
console.log(char.substring(-4))//=>char.substring(0)
console.log(char.substr(-4))//=>char.substr(141)
var change = 'UFC';
var replacement = 'WWE';
var regex= /The/gi
console.log(char.replace(change, replacement));//return The former two-division WWE World Champion said he was done fighting in a statement posted to his verified Twitter early Sunday morning.-from UFC
console.log(char.replace(regex, change)); //return UFC former two - division UFC World Champion said he was done fighting in a statement posted to his verified Twitter early Sunday morning.- from UFC