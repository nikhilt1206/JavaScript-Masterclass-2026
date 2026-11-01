//for each method

const data = ['Jatin', 'Uday', 'Alia', 'Deepika', 'Raj']; //array

//function which has no name - anonymous function
data.forEach(function(user){ //from the data array one by one values given to the user
    console.log(user);
})
data.forEach(function(user,index){ //we can pass other parameter as index
    console.log(`${user} ${index}`);
})

//like lamda in java we can use here to remove anonymous function - => : arrow function
data.forEach(user => console.log(user));
data.forEach((user,index) => {
    console.log(user);
    console.log(index);
});