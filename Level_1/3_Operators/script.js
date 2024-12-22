//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
*/

//1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
//1.1)Addition (+)
console.log("Arithmatic Operator------------------------");
let sum = 5 + 3;
console.log("Sum: "+sum);

//1.2)Subtraction (-)
let difference = 5 - 3;
console.log("Sub: "+difference);

//1.3)Multiplication (*)
let product = 5 * 3;
console.log("Multiply: "+product);

//1.4)Division (/)
let a = 12 / 2;
console.log("Division: "+a);

//1.5)Modulus (%)
let remainder = 10 % 3;
console.log("Modules: "+remainder);

//1.6)Exponentiation (**)
let power = 2 ** 3;
console.log("Exponential: "+power);

//1.7)Increment (++)
let counter1 = 5;
counter1++;
console.log("Increment: "+counter1);

//1.8)Decrement (--)
let counter2 = 5;
counter2--;
console.log("Increment: "+counter2);


//2.Assignment Operators - Assignment operators are used to assign values to variables.
//2.1)Assignment (=)
console.log("Assignment Operator-------------------");
let z = 10;
console.log("Assign: "+z);

//2.2)Addition Assignment (+=)
z += 10;
console.log("Add Assign: "+z);

//2.3)Subtraction Assignment (-=):
z -= 5;
console.log("Sub Assign: "+z);

//2.4)Multiplication Assignment (*=):
z *= 5;
console.log("Multiply Assign: "+z);

//2.5)Division Assignment (/=):
z /= 5;
console.log("Multiply Assign: "+z);

//2.6)Modulus Assignment (%=):
z %= 5;
console.log("module Assign: "+z);

//2.7)Exponentiation Assignment (**=)
let k = 2;
k **=3;
console.log("exp Assign: "+k);


//3.Comparison Operators - Comparison operators are used to compare two values.
console.log("Comparision Operator------------------");
//3.1)Equal (==)
console.log("Equal:" , 5 == 5);
console.log("Equal n to s:" , 5 == "5");

//3.2)Strict Equal (===)
console.log("Strict Equal n to s:" , 5 === "5");

//3.4)Not Equal (!=)
console.log("Not Equal:" , 5 != 5);
console.log("Not Equal n to s:" , 5 != "5");

//3.5)Strict Not Equal (!==)
console.log("Strict Equal n to s:" , 5 !== "5");

//3.6)Greater Than (>)
console.log("Greaterthan:" , 5 > 4);

//3.7)Less Than (<)
console.log("Lessthan:" , 5 < 4);

//3.8)Greater Than or Equal (>=)
console.log("Greaterthan equal:" , 5 >= 4);

//3.9)Less Than or Equal (<=)
console.log("Lessthan equal:" , 5 <= 4);


//4.Logical Operators - Logical operators are used to combine multiple conditions.
console.log("Logical Operator-------------------------");
//4.1)Logical AND (&&)
console.log("AND:", true && false);
console.log("AND:", false && false);
console.log("AND:", false && true);
console.log("AND:", true && true);

//4.2)Logical OR (||)
console.log("OR:", true || false);
console.log("OR:", false || false);
console.log("OR:", false || true);
console.log("OR:", true || true);

//4.3)Logical NOT (!)
console.log("Logical Not:", !true);
console.log("Logical Not:", !false);

//Example
let haveID = false;
let isAdult = true;
let result;
if(haveID && isAdult){
    result = "Allowed";
}else{
    result = "Not Allowed";
}
console.log("Example:" , result);

// String Operators
console.log("String Operator-------------------------")
//String concatenation
let str = "hello" +" "+ "world";
console.log("String concatenation: " ,str);
str += " How are You?";
console.log("String concatenation: " , str);

//String with Different Quotes:
console.log("I'm getting 'better' day by day");
let message = "I'm " + 'getting ' + "'better' " + 'day by day';
console.log(message);
console.log('I\'m getting "better" day by day');

//Concatenation with Object Properties:
let userDetails = {
    id: 1,
    names : "SK"
};
console.log("String and object: " + "Welcome " + userDetails.names + " Your id is " + userDetails.id);

//Template literal
console.log("String and Object:", `Welcome ${userDetails.names} your id is ${userDetails.id}.`);

//Order Prcedence
console.log("Order:",10-2/2); // refer w3 school order of precedence.
console.log("Order:",(10-2)/2);

// New Examples with - and /
console.log("Order:",2 + 4 * 3);
console.log("Order:",(2 + 4) * 3);

// Additional Combined Example
console.log("Order:",(8 / 2) * (2 + 2));