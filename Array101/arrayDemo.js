//Array in JS is an Object - stored in Heap Memory
let names = [`Jatin`,`Raj`,`Ritu`];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log("-".repeat(25));

//for loop for travering the array
for(let index=0;index<names.length;index++){
    console.log(names[index]);
}
console.log("-".repeat(25));

for(let x of names){ //will get the value
    console.log(x);
}
console.log("-".repeat(25));

for(let z in names){
    console.log(z); //gives the keys(index) not data because array is stored as object
    //"0" (Key) - "Jatin" (Value)
    //"1" - "Raj"
    //"2" - "Ritu"
}
console.log("-".repeat(25));

console.log(names["0"]); //Value - Jatin
console.log("-".repeat(25));

let marks = Array.of(3,5,10); //array will be created which consists of 3 elements - 3,5,10 as values
//Keys will be "0","1" and "2"
console.log(marks.length);
console.log(marks);
console.log("-".repeat(25));

let data = new Array(5); //5 memory allocations will be done with empty values
console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);
console.log(data.length);
console.log(data[104]); //its is not there - undefined - "104" key is not there
console.log("-".repeat(25));

let demo = Array.from(`jatin`); //from only works on string
console.log(demo);
let demo1 = Array.from(10); //this is give empty array - []
console.log(demo1);
