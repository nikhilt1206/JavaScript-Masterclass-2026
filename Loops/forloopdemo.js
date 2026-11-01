//For loop - To repeat something n number of times (works on count)

//print number 1 to 10
for( let i=1; i<=10; i++){ 
    // i is looping variable 
    // i=1 -> initialization, i<=10 -> condition, i++ -> updatation
    console.log(i);
} //multiple statement inside fop loop block - we should use { } 
console.log("Nikhil");

//while loop is going to work on a condition (condition might be truthy or falsy values)
//if we put while(1) - it will work because 1 is truthy value and condition becomes true
//if we put while(undefined) - it will not work because undefined is falsy value and condition becomes false
let i = 1;
while(i<10){ 
    console.log('Hello'); //9 times Hello will be printed (1-9)
    i++;
}

//while loop will be executed only if the condition is true, if it is false then it will never executed
//do while loop will be executed alteast for once irrespective of the condtion (true/false)
do{
    console.log("Hello from do while");
}
while(undefined); //even if this condition is false do while loop statement will be executed once 
