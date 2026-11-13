const user = { 
    name : 'Jatin',
    loginCount : 0,
    login : function(){
        console.log("Logged in successfully!!");
        this.loginCount++; //we can't right loginCount - it will search for a variable, it is property
        this.printInfo();
    },
    //using this keyword we can call the method inside the object literal
    printInfo : function(){ //we can also write it as - printInfo(){} - shorthand form for the method property
        console.log('Welcome', this.name);
    }
}
//Using this keyword, we can update the values of the properties
console.log(user.name);
console.log(user.loginCount);
user.login();
user.login();
user.login();
console.log(user.loginCount);