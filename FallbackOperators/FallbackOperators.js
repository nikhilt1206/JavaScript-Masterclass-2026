//Fallback Operators in JS : If a value is of particular type, it is going to fallback or take the default value
//if the value does not matches the certain criteria, it is going to take some other values.
//2 Types - || (OR) and ?? (Nullish Coalescing)

let username;
console.log(username); //undefined

//OR (||) operator is going to check for all falsy values 
//if user is having falsy values, it will not take them instead it will take something else
console.log(username || "jatin"); //jatin will be printed
//since username has falsy value - undefined so it will fallback to "jatin" which is default value

//Nullish Coalescing (??) - it tells it will only takecare of 2 things - null and undefined 
console.log(username ?? "jatin"); //since username gives undefined so ?? will take care of it and print default value
let username1 = ""; //empty string is a falsy value so ?? won't take care of it 
console.log(username1 ?? "jatin"); //prints empty string
console.log(username1 || "jatin");//prints jatin
let username2 = 0; //falsy value
console.log(username2 || "jatin"); //prints jatin
console.log(username2 ?? "jatin"); //prints 0

//Fallback operators are used for Configuration Files 
