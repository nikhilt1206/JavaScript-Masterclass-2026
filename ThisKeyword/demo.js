let user = {
    name : `Nikhil`, //name here is a property not any variable 
    age : 32,
    //function created inside the object literal is called Method
    greet : function(){ //greet is not the name of the function, it's property to access the function
        console.log(`Hello`, this.name);
    }
}
console.log(user.name);
console.log(user.age);
user.greet();
console.log(user.greet);