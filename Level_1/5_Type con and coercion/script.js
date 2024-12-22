//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number
let strNum = "123";
let num = Number(strNum);
console.log("String to Number:" , typeof(strNum));
console.log("String to Number:" , typeof(num));


// Number to String
let numStr = 123;
let str = String(numStr);
console.log("Number to String:" , typeof(numStr));
console.log("Number to String:" , typeof(str));


// Boolean to String
let bool = true;
let boolStrl = String(bool);
console.log("Boolean to String:" , typeof(bool));
console.log("Boolean to String:" , typeof(boolStrl));


// String to Boolean
let strBool = "true";  // any value or not empty 
let booltoStr = Boolean(strBool);
console.log("String to Boolean:" , typeof(strBool));
console.log("String to Boolean:" , typeof(booltoStr));


// Parsing integers and floats
let strValue = "123.45";
let intNum = parseInt(strValue);
let floatNum = parseFloat(strValue);
console.log("Parsing integers and floats: "+`${intNum}` , typeof(intNum));
console.log("Parsing integers and floats: "+`${floatNum}` , typeof(floatNum));

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number
let result = "5   " + 2;
console.log("string to number in coercion (+):" , result);
let result1 = "5   " - 2;
console.log("string to number in coercion (-):" , result1);
let result2 = "5   " * 2;
console.log("string to number in coercion (*):" , result2);

// Boolean and Number
let results = true + 1;
console.log("Boolean and Number:" , results);
let resultss = false + 1;
console.log("Boolean and Number:" , resultss);


// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks

console.log(5 == "5");
console.log(5 === "5");
console.log("5" === "5");

console.log(true === 1);
console.log(true == 1);