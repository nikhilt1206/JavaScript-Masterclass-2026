//Objects - objects in JS is similar to that of Hashmap or map.
//In Java, maps has Keys and Values.
//Keys in object will always - string literal
//Objects will store Key-Value kind of data
//Objects are used for Config files, fixtures, test data generator etc

let names = ['jatin','raj','rahul'];
console.log(names);
console.log(typeof names);
console.log(names['0']);
//Arrays is always going to be an object in JS and are stored as Keys (string) and values + length property(dynamic)
//we can increase/decrease the size of an array in JS.

//Creating objects - 4 ways to create an object in JS
//1. Object Literal
let user = {
    name : "Jatin", //string
    age : 35, //number
    isActive : true, //boolean
    marks : [75,85,90], //array (object)
    greet : function(username){
        console.log(`Hello ${username}`);
    },
    address : {
        line : 'c 304',
        apartment : 'jupitar',
        city : 'Mumbai',
        pincode : '221010'
    }
}
//Access name
console.log(user);
console.log(user.name); 
console.log(user['name']); 
//Access the age and isActive
console.log(user.age);
console.log(user.isActive);
//Access marks array
console.log(user.marks[0]);
//Access the function
user.greet('nikhil'); //no need to do console.log() since it is not returning anything
console.log(user.greet('nikhil')); //greet() fucntion is not returning anything - undefined
//nesting of objects
console.log(user.address.line);
console.log(typeof user); //object
//traversing of an object
for(let key in user){ //we can't use for of here - it won't work in case of objects (for arrays it will work)
    console.log(key, ':', user[key]);
}
