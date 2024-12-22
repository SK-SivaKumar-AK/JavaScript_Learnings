// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let age = 25;
console.log(typeof(age));
let ages = "25";
console.log(typeof(ages));

let price = 19.99;
console.log(typeof(price));

//2.String - Represents a sequence of characters.
let greeting = "Hello World";
console.log(typeof(greeting));

//3.Boolean - Represents a logical entity and can have two values: true or false.
let isActive = true;
console.log(typeof(isActive));

//4.Undefined - A variable that has been declared but not assigned a value.
let uninit;
console.log(typeof(uninit));

//5.Null - Represents the intentional absence of any object value.
let box = null;
console.log(typeof(box));

//6.Symbol - Represents a unique and immutable value, often used as object property keys.
let uniques = Symbol("key");
console.log(typeof(uniques));

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).
let bigint = BigInt(987456321123645);
console.log(typeof(bigint));



//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/
let person = {
    names : "siva",
    age : 20,
    isEmployed : true,
};
console.log(typeof(person));
console.log(person.names);
console.log(person.age);

let emptyObject = {};
console.log(emptyObject);

//2.Array
//A special type of object used for storing ordered collections of values.
let number = [1 , "siva" , true , null];
console.log(number);

//3.Function
//A special type of object that is callable and can perform an action.
function invite(){
    console.log("Your welcome");
}
invite();

//4.Date - A built-in object for handling dates and times.
let now = new Date();
console.log(now);