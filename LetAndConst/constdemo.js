const PI = 3.14;
//PI = 2; - TypeError: Assignment to constant variable.
console.log(PI);

//final in java says value cannot be changed but in JS const pointer is locked but object's value can be changed
//const - we can store object as well
const data = {name : "Jatin"};
//objects get created in heap memory and data is created inside call stack
console.log(data.name);
data.name = "Katrina"; //modified value of data
console.log(data.name);

//data = {name : "Ritik"}; //another object created using same pointer which is not allowed
console.log(data.name); //TypeError: Assignment to constant variable.
//objects value can be modified but the linking(pointer) cannot be modified

const array = [10,20,40];
console.log(array);
array[0]=20; //value modified
console.log(array);
array = [60,50,30]; //reassignment is not allowed

