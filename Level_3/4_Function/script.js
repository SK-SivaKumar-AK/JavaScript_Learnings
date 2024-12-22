//Self-Invoking Functions
(function () {
    console.log("Self-invoked function is executed!");
}());



//call()
function printMessage() {
    return "The age of the " + this.name + " is " + this.age;
}
const person1 = {
    name: "John Doe",
    age: 22,
}

const person2 = {
    name: "Jane Doe",
    age: 40,
}
console.log(printMessage.call(person1));
console.log(printMessage.call(person2));



//apply()
function printSum(p1, p2) {
    return this.num1 + this.num2 + p1 + p2;
}

const nums = {
    num1: 5,
    num2: 10,
}
console.log(printSum.apply(nums, [40, 32]));


//bind()
function greet(message) {
    console.log(message + ', ' + this.name);
}
// Object with a 'name' property
const person = { name: 'John Doe' };    
const greetPerson = greet.bind(person, 'Hello');
greetPerson();


function multiply(x, y) {
    return x * y;
 }
 // Using bind to preset the first parameter
 const multiplyByTwo = multiply.bind(null, 2);  // x
 console.log(multiplyByTwo(5));  // y




//closers
function name() {
    let name = "John";
    return function getFullName() {
        return name + " Doe";
    }
}

const fullName = name();
console.log("The full name is " + fullName());


//smart way
function printWatch({ brand, price }) {
    return "The price of the " + brand + "\'s watch is " + price;
}

const watch = {
    brand: "Titan",
    price: 10000,
    currency: "INR",
}
console.log(printWatch(watch));