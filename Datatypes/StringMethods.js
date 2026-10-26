let emailAddress = `rnikhil2706@gmail.com`;

//Length of the string - length is property not method - returns number 
console.log(emailAddress.length); //21 characeter stored in string only no character concept in JS

//convert string to UPPERCASE (UPPERCASE is a method)
let data = emailAddress.toUpperCase(); //string modification is not allowed - it will create a new string
//existing emailAddress will not be modified, method will create a new string which is stored in data 
//2 strings will get created in heap memory - `rnikhil2706@gmail.com` and `RNIKHIL2706@GMAIL.COM`
console.log(data); 

//convert string to lowercase (method())
let lowerCaseData = emailAddress.toLowerCase();
//Here new string won't be created in Heap coz we already have that in Heap so lowerCaseData will point to it
console.log(lowerCaseData);

//removing heading and trailing whitespaces
let x = `    Hello    `; 
let trimmedx = x.trim(); //returns string - new string gets created
console.log(trimmedx);

//check whether string or substring is part of the original string
let emailAddress1 = `nikhilt1206@gmail.com`;
console.log(emailAddress1.includes(`@`)); //true
console.log(emailAddress1.includes(`@gmail.com`)); //true
console.log(emailAddress1.includes(`@yahoo.com`)); //false

//to get the index of a particular search string
console.log(emailAddress1.indexOf(`t`)); //6 - index starts from 0
console.log(emailAddress1.indexOf(`t1206`)); //6 means the substring will start from 6th index 
console.log(emailAddress1.indexOf(`com`));

//startsWith() and endsWith()
console.log(emailAddress1.startsWith(`nikhil`)); //returns boolean - true
console.log(emailAddress1.endsWith(`@gmail.com`));

//substring() and slice() method
let userName  = emailAddress1.slice(0,6); // [0----5] - new string will be created
console.log(userName); //nikhil
let domain = emailAddress1.slice(-9); //negative indexes can be used - returns string - returns string from backwards
console.log(domain);

//substring() - we cannot pass -ve index
let user_name = emailAddress1.substring(0,6);
console.log(user_name);

//replace() and replaceAll()
let newData = emailAddress1.replace("nikhil","roli");
console.log(newData);
let newData1 = emailAddress1.replace("n","r"); //only first occurance is replaced 
console.log(newData1);
let newData2 = emailAddress1.replaceAll("i","r"); //repalces all the occurances 
console.log(newData2);

