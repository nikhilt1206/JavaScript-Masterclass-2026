//string - series of charactaers 
//strings literals are generally kepy in Heap memory in JS

let fname = "Nikhil";
let x = 'Nikhil';
//Here interning will happen beacuse no matter how many times we are using the same string value - they are created only once in heap memory

let y = `Nikhil`; //most preferred way to create string in JS
//`` : we have flexibility that we can write multiline. To create multiline string

let z = `Nikhil
Sharma
SDET
Hello`
console.log(z);
console.log(fname);

//We can use placeholder while using ` `
let data = 10;
let message = `The value of data is ${data}`;
console.log(message);
let message1 = `The value of data is ${data+20}`;
console.log(message1);
let message2 = "The value of data is "+data;
console.log(message2);
let user = 'Roli';
let message3 = `The value of data is ${data} only!! and name
of the user is ${user}`;
console.log(message3);

//strings are immutable. Any modification will create another string.
console.log(user); 
console.log(user[0]); //R will be printed
user[0]='T'; //this is not possible becasue string are immutable - here we are doing updation so no new string
let num= [10,20,30];
console.log(num[0]); //10 will get printed
num[0]=40; //array value gets updated
console.log(num);

//Compare strings - Primitive value in JS (===) - strict equal checks type and the value
let x1 = `jatin`;
let y1 = `jatin`;
console.log(x1 === y1); //both are equal - type + value
let z1 = `Nikhil`;
console.log(x1 === z1); //type is same but values are different
let a = `jat`+`in`; //a will store string - jatin
console.log(x1 === a); //true
let b = [`j`,`a`,`t`,`i`,`n`].join(""); //returns string - final string - jatin
console.log(x1 === b);
let c = new String("jatin"); //creating string object not string 
//c is object here wrapped inside object of string - it will create a new string in heap with same value as jatin
console.log(x1 === c); //false because x1 is string and c is object even though c contains same value but types are not same
console.log(typeof c); //object 
console.log(typeof x1); //string
let value = c.valueOf(); //returns string - object's value not object
console.log(value); //c is object whose value is jatin
console.log(x1 === value);

