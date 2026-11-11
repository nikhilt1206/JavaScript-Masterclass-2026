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
let user = { //user is reference variable
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
//In objects, we can use reversed keywords as keys - it won't cause any issue (it will be considered as string)
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

//2. Using Object() constructor
let data = new Object();
console.log(data); //it's an empty object - {}
data.name = "raj";
data.age=17;
data.marks=[60,70,90];
data.name="Rola";
//In case of Duplicate keys, it will use the last updated key and update its value
//In order to delete a property, from the object 
delete data.name; //name property gets deleted
console.log(data); //key - name and value - raj will be added to the object

//3. Using create() method - Object.create() - creates object using prototype
//prototype - it will use existing object to create the new object (inheritance)
//we are using an object to create another object
let person = {
    name : "Simmi",
    age : 30,
    isActive : true
}
let personRef = Object.create(person);
console.log(personRef); //object got created but prototype used is null
personRef.marks=[66,89];
personRef.name = "Raju";
console.log(personRef); //when we give object reference - it will only give info about current object (no prototype info)
//to see prototype info
console.log(Object.getPrototypeOf(personRef));
console.log(personRef.name);
console.log(personRef.name); //priority is given to the object which we have created - Raju
console.log(Object.getPrototypeOf(personRef).name);
let userData = {
    username : "Ritu"
}
let student = Object.create(userData); 
student.name ="Nikhil";
console.log(student);
console.log(Object.getPrototypeOf(student)); //student prototype is userData
console.log(student.username);
console.log(student.x);

//Legacy Method
console.log(personRef.__proto__.name);//access the proto keys
console.log(personRef.hasOwnProperty('isActive'));
console.log(personRef.hasOwnProperty('marks'));

//4. 
class User{
    constructor(name,age,contactNumber){
        this.name = name;
        this.age = age;
        this.contactNumber = contactNumber;
    }
}
let personRef1 = new User("Anju",34,"9459545467");
console.log(personRef1);
let personRef2 = new User("Nirbhaya");
console.log(personRef2);