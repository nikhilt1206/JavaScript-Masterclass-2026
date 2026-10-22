//Primitive Data Types 

let username = 'Nikhil'; //string (no character concept - string can have character/series of characters)
let age = 35; //number
let PI = 3.14; //number
let isActive = true; //prefix 'is' is required everytime we declare a boolean variable - boolean
let user = null; //considered as object - if Js sees it null - it will treat as object (bug) - null is datatype
let data = undefined;

//to store very big number (integer) - bigint
let accountNumber = 3237253752735762537n; // sufix 'n' is required at the end of the number to make it a bigint
//if n is not kept, it will be considered as number

let userId = Symbol("@"); //symbol datatype

console.log(username);
console.log(age);
console.log(PI);
console.log(isActive);
console.log(user);
console.log(data);
console.log(accountNumber);
console.log(userId);

//typeof is used to know the datatype of a value
console.log(typeof username);
console.log(typeof age);
console.log(typeof PI);
console.log(typeof isActive);
console.log(typeof user);
console.log(typeof data);
console.log(typeof accountNumber);
console.log(typeof userId);

//Phase 1 : All the variables will be hoisted (memory allocation will happen)
//Phase 2 : JS executes code line by line then assignments will happen  
//Print the values and their types

//Non - Primitive Data Types (Reference Type)
//Object (arrays, functions, regexs, maps, dates)

let marks = [78, 88 ,79, 66]; //arrays (marks - reference variable) - arrays created in the heap memory
console.log(marks);
console.log(typeof marks); //arrays - object 

let userData = {name : 'Katrina'};
console.log(userData);
console.log(userData.name);
console.log(typeof userData);


