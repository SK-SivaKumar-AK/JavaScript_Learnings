/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/

//Arrow Functions
function add(a , b){
    return a + b;
}
const add1 = (a , b) => {
    return a + b;
}



//Variable Declarations
var num1 = 10;

let num2 = 20;
const num3 = 25.297;



//Template Literals
let name ="Siva";
"Hello, " + name + "!";

`Hello, ${name}!`;


//Object Destructuring
var userOne ={
    firstName : "john",
    lastname : "Doe",
};
userOne.firstName;

const {firstName , lastname} = userOne




//Default Parameters
function greet(names){
    names = names || "Guest"; 
    return "Hello, " + names + "!";
}

function greet(names = "Guest"){
    return "Hello, " + names + "!";
}



//Spread Operator
let x = [1 , 2 , 3];
let y = [4 , 5 , 6];
let z = x.concat(y);

let combained = [...x , ...y];

