let age = 35;
let pi = 3.14;
let data = -100;

console.log(typeof age);
console.log(typeof pi);
console.log(typeof data);

//Number Issue 1
//Js will round things off
console.log(0.1+0.2); //it won't come as 0.3 (issue) - it will give result as approx not exact 
//Because of this issue - Banking aaplications calculation goes wrong
//this issues makes comparison wrong
console.log((0.1+0.2)===0.3);
// === -> strict equal to -> Both number and type will be checked
// == -> loose check in JS 

//EPSILON - Used for decimal numbers -> smallest gap between 1 and another decimal number
console.log(Number.EPSILON); //Very tiny difference
console.log(1+ Number.EPSILON); //Adding the EPSILON -> considered a new number - full EPSILON used
console.log(1+Number.EPSILON/2); //Half of EPSILON so number gets round off

//If value is greater than EPSILON -> new number
//If value is less than EPSILON -> considered same number (round off)

//Math.abs() - converts -ve to +ve
console.log(Math.abs(-2));
console.log(Math.abs((0.1+0.2)-0.3)<Number.EPSILON);
//If we want to compare decimal values in JS use above expression

//Number Issue 2 
//Number is 64 bit floating point value - we can't access numbers from 0 to 2raisetopower64
//We can only access till (2raisetopower53 -1)
console.log(Number.MAX_SAFE_INTEGER); //2^53 -1
console.log(Number.MAX_SAFE_INTEGER+1);
console.log(Number.MAX_SAFE_INTEGER+2);
console.log(Number.MAX_SAFE_INTEGER+3);
//If we try to access the number which is greater than 2^53 -1 -> JS will do round off - Issue
//storing bank account number or a big number and keep incrementing it, we will face the issue

//Solution - bigint 
let accountId = 9007199254740995n;
console.log(accountId);

console.log(10/0); //In Js it will come infinity
console.log(-10/0);
console.log(0/0); //NaN - not a number - not defined

console.log("5" -5); //0 
console.log("5" -2); //even though "5" is string but string is containing a number so it substracted 
console.log("abc" -5); //NaN - result is not number (applicable to Number type)
console.log("5" +5); //here result is concatenation of 5 with the string "5" -> 55

console.log(typeof NaN); //number 

//Compare NaN with NaN - false
console.log(NaN === NaN); //remember NaN cannot be equal to NaN because both are coming from different mathematical operations



