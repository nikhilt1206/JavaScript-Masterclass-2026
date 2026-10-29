let username;
//JS automatically assigns the default value - undefined - no value 
console.log(username);

let person = {name : "jatin"};
console.log(typeof person);
console.log(person.name);
//If an attribute/key is not present in a particular object - we will get output is undefined
console.log(person.age);

function greet(personName){
    console.log(`Hello.....${personName} How are you ???`);
}
greet(`katrina`);
//if we don't pass personName i.e. katrina parameter - parameter will take the value as undefined
//method will be called but personName will be undefined
greet(); //undefined - Hello.....undefined How are you ???

console.log(typeof undefined); //typeof undefined is undefined

//null - no value (this developer has to give explicitly)
//whenever we want to explicitly assign the value as nothing
let user = null;
console.log(user);
console.log(typeof user); //it will come as object which is a bug in JS - typeof null is object

console.log(user == username); //loose equality
console.log(user === username); //strict equality - value + type
 