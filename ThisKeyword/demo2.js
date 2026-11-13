//Function is outside the object literal
function printName(){
    console.log("Hey there!!", this.name);
}
printName(); //name info is not there so it will print undefined

function printName1(){
    console.log("Hey there!!", this.name);
}
const user = {
    name : "Jaitn",
    greet : printName1
}
user.greet();
//Whether the fucntion is part of the object or is outside it doesn't matter if this keyword comes up - check which object is calling
//user has property name Jatin so output came as - Hey there!! Jatin

const user2 = {
    name : "Raj",
    greet : printName1
}
user2.greet(); //Hey there!! Raj

