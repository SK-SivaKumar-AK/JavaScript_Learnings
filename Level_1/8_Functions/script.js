// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

//This is hoisted
//displayMessage();  

function displayMessage(){
    console.log("We are developers, we love to find bugs.");
    let x = 10;
    let y = 20;
    console.log(x + y);
}

// Calling the function
displayMessage();




// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/

function greet(userName){
    console.log("Hello " + userName + "!");
}
function greetUser(firstName,lastName){
    console.log(`Hello, ${firstName} ${lastName}!`);
}
function math(x , y , z){
    console.log(x + y + z);
}

//Argument
greet("Siva");
greet("Kumar");
greetUser("Siva" , "Kumar");
math(1 , 2 , 3);




// Default Parameter
function printer(color = "Black"){
    console.log(`Print Document in ${color} color.`);
}
printer("Blue");
printer();



// Function with Return Type
function add(a , b){
    return a+b;
}
const sum = add(50 , 30);
console.log(sum);



///////////////////////////////////////////////////////////////////////



// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/
//morning();  // Its not working
const morning = function(){
    console.log("Good morning everyone");
}
morning();


// With Argument
const morningWithName = function(names){
    console.log(`Good morning ${names}`);
}
morningWithName("Sivakumar");



// Function Expression with Return Type
const multiply = function(a, b){
    return a * b;
}
console.log(multiply(4 , 2));
const product = multiply(4 , 2);
console.log(product);



///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

const evening = () => {
    console.log("Good evening everyone!");
}
evening();
// With Argument
const eveningWithName = (firstName) => {
    console.log(`Good evening ${firstName}!`);
}
eveningWithName("Sivakumar");


// Arrow Function with Return Type
const subtract = (a , b) => {
    return a - b;
}
console.log(subtract(4 , 2));
const sub = subtract(4 , 2);
console.log(sub);

 

// Shorter Way
const subtracted = (a , b) => a-b;
console.log(subtracted(5 , 1));



//Function Calling Other Function
function welcomeShopper(name){
    console.log(`Welcome ${name}`);
}
function main(name){
    let shopperName =name;
    welcomeShopper(shopperName);
}
main("karthick");



//Anonymous Functions: Later on Course on Arrays
setTimeout(() => {
    console.log("anonymous Function");
} , 5000);

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */

function demo(){
    var a = 20;
    console.log(a);
    if(true){
        var x = "var";
        let y = "let";
        const z = "const";

        console.log("If:" , x);
        console.log("If:" , y);
        console.log("If:" , z);
    }
    console.log("Function:" , x);
    //console.log("Function:" , y);
    //console.log("Function:" , z);
}
demo();
//console.log(a);