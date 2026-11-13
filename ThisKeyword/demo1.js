const user = {
    name : "Jatin",
    age : 35,
    greet : function(){
        console.log("Hello",this.name);
    }
}

const user2 = {
    name : "Ankit",
    age : 22,
    greet : function(){ //greet is just a pointer to this function and since it is part of object literal - Method
        console.log("Hello",this.name);
    }
}

console.log(user.name);
console.log(user.age);
user.greet(); //user is calling greet - for the user object give the property name - Jatin
user2.greet();
