//if the condition is true, execute the if block statements else execute the else block statements
let age = -9;
if(age>=18){
    console.log("Person is an adult");
}
else if(age>0 && age<18){
    console.log("Person is still a child");
}
else{
    console.log("Invalid age!! Age should be greater than 0");
}