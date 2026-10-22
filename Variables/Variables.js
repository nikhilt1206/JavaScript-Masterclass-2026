var username = "Jatin";
console.log(username);

var age = 10;
console.log(age);

var address;
console.log(address);

console.log(phoneNumber);//usage is happening before declaration at line 10 
var phoneNumber; //declaration is happening at line 11

console.log(city);
var city;

var city = "Mumbai"; //variable redeclaration
var city = "Pune"; //variable redeclaration
console.log(city);

for(var i=0;i<5;i++){
    console.log(i);
}
console.log(i); //gives 5 - i is acessible outside the loop - seems like a global scope or a bug

//After 2015, ES6 introduced -> Two ways to create variable in JS -> let and const

