//Like UUID in Java, symbol also provides uniqueness but we cannot see that unique value
//Two symbols cannot be same, symbol offers complete uniqueness
let userId1 = Symbol("UserId");
let userId2 = Symbol("UserId");
//userId1 and userId2 cannot be same
console.log(userId1); //Symbol(UserId)
console.log(userId2); //Symbol(UserId)
//Symbol(UserId) - this is description (values won't be shown in console)
console.log(userId1 === userId2); //false - since both values are unique and types are same 
console.log(typeof userId1);
console.log(typeof userId2);
