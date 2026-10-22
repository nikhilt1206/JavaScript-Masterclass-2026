//Hoisting
console.log(fname); //undefined - before declaration it is used
var fname;
var fname = "Jatin";
var fname = "Katrina" //Redeclaration 
console.log(fname);

//Block level access won't work for var 
if(true){
    var x = "nikhil";
}
console.log(x); //even though x is out of the scope - it is printing nikhil

//console.log(lname);
let lname = "Roli"; //will get error - Cannot access 'lname' before initialization

let age;
age = 10; //initialization
//let age = 30; //error - age is already declared - Identifier 'age' has already been declared
age = 20; //updation - allowed
console.log(age);

if(true){
    let temp = "hidden"; //temp belongs to if block only
}
//console.log(temp); //ReferenceError: temp is not defined - outside block let variable can't be accessible

const RATE_OF_INTEREST=10;
PI = 3.14;
PI = 4; //Reassignment is not allowed
console.log(PI); //TypeError: Assignment to constant variable

const primaryId = 14;
//const primaryId = 15; //redeclaration is not allowed
console.log(primaryId);

if(true){
    const city = "Newyork";
}
console.log(city); //ReferenceError: city is not defined 


