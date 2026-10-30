console.log("Hello");
console.log("Nikhil");
//When a certain condition is true then only katrina will be printed
//if statement = if the condition is true then immediate next statement is printed otherwise not (Conditional Statement)
if(10>5){ //true - Katrina will get printed
    console.log("Katrina");
}
if(10>50){ //false - Suchita will not be printed
    console.log("Suchita");
}

//if we are giving falsy value (out of 8 falsy values) as a condition inside if then it will be considered as false
if(0){ //since if contains falsy value as a condition so it is false and next immediate statement will not be printed
    console.log("falsy value will not be printed");
}
if(1){ //if contains truthy value so it is true and next immediate statement will be printed
    console.log("truthy value will be printed");
}
