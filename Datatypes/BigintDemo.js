let data = Number.MAX_SAFE_INTEGER;
console.log(`The max safe integer ${data}`); 
//maximum largest number that we can store as number datatype

console.log(data+1);
//we will loose the precision 
console.log(data+2); //it should come as 9007199254740993 but it is coming as 9007199254740992
//MAX_SAFE_INTEGER - Till here (9007199254740991) the calculations will work properly but after this we will loose the precision

//These kinds of huge values are used in timestamps, nanoseconds, UID, transaction Id's etc
//If we want calculations to be perfect and correct for huge numbers more the MAX_SAFE_INTEGER - we use bigint
let transactionId = 34232323232323223232324n;
let x = BigInt(100);
console.log(typeof x);
console.log(typeof data);

//Explicit conversion
let no1 = 100; //number 
let no2 = 100n; //bigint
//console.log(no1+no2); //Error - Cannot mix BigInt and other types, use explicit conversions
//We have to convert no1 using BigInt() and then addition will be performed
console.log(BigInt(no1)+no2); //200n

let num1 = 10n;
let num2 = 3n;
console.log(num1/num2); //10/3 - it will only give 3n (whole number), decimal part will be ignored
//If we want decimal result then we should not use bigint. Any mathematical operation on BigInt will give whole number
//to get the precision (decimal part) we need to convert it to number using Number() method but is risky 
//Problem when we convert bigint to number - BigInt can store number greater than 2^53-1 and number can only store 2^53-1 (MSI)
//If there is number which is greater than MSI and bigint is storing that there we will loose the precision 
//JS cannot convert number to bigint and vice versa automatically - Explicitly we have to convert
console.log(Number(num1)/Number(num2)); //3.33333333333335

let n1 = 100n;
let n2 = 100;
// == : loose equality (checks value only) and === : strict equality (checks value + type)
console.log(n1 == n2);  //since both values are 100 so it will be true
console.log(n1 === n2); //even though both values are equal but types are different so it will be false


