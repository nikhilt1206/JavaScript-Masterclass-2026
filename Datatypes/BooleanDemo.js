let isActive = true;
let isPresent = false;
//'is' PREFIX is mandatory for creating boolean 
console.log(isActive);
console.log(isPresent);

//JS uses boolean in a different way!!
//Any value -> forcefully converted into boolean in conditional statement/loop
if("Jatin"){ //non-empty string - truthy
    //Here, JS forcefully converts "Jatin" string into boolean value 
    //This conversion is called - "Type Coersion"
    console.log("Hello");
}

//Thare are 2 values in JS - truthy and falsy 
//false - 8 types of values - empty string, 0, -0, Bigint Zero (0n), null, Nan, undefined, false
//Apart from 8 falsy values, all others are considered truthy values
if(null){ //falsy value so nothing will be printed
    console.log("falsy value"); 
}
if(1){ //truthy value so it will be printed
    console.log("truthy value")
}

//Empty array and Empty objects are considered as truthy values
if([]){ //empty array
    console.log("truthy value");
}
if({}){ //empty object
    console.log("truthy value");
}
//Truthy and Falsy values can be converted into true/false - Type Coersion

//Boolean method can convert anything explicitly to true/false
console.log(Boolean(1)); //true
console.log(Boolean(-1)); //true
console.log(Boolean(0)); //false
console.log(Boolean([])); //true
console.log(Boolean([0])); //true
console.log(Boolean({})); //true
console.log(`*`.repeat(35));

//Convert any value to boolean
console.log(!!"jatin"); //true
console.log(!!0); //false