//for loop

const data = ['Jatin', 'Uday', 'Alia', 'Deepika', 'Raj']; //array
//traverse - read all the values one by one from the array
for(let index=0; index<data.length; index++){ //looping with for loop
    console.log(data[index]);
}

//variation of for loop - for of (similar to for each loop) - used when working with Array/String
for(let username of data){ 
    console.log(username);
}

let user = 'Jatin';
//To traverse individual characters inside the string
for(let character of user){ //for of
    console.log(character);
}
for(let index=0;index<user.length;index++){ //normal for loop
    console.log(user[index]);
}

//variation of for loop = for in - we will get the index value - it is meant for objects 
for(let x in data){
    console.log(x);
}
//for in - when used with objects - it will give the keys - if we want to extract the values from keys 
//it is not meant for array/string - it is meant for JS objects
let response = {username : "Nikhil", age : 30, city : "Bengaluru"};
for(let data in response){
    console.log(data+" "+response[data]); //username age city 
}