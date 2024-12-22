//Bitwise Operators  
/* 
0	0	0     (&)
0	1	0
1	0	0
1	1	1   
*/
/* 
0	0	0     (|)
0	1	1
1	0	1
1	1	1 
*/
/* 
0	0	0  (^)
0	1	1
1	0	1
1	1	0 
*/
/* 
0	1     (~)
1	0 
*/
/* 
5	00000000000000000000000000000101
5 << 1	00000000000000000000000000001010 (= 10)
5 << 2	00000000000000000000000000010100 (= 20) 
*/
/* 
5	00000000000000000000000000000101
5 >> 1	00000000000000000000000000000010 (= 2) 
*/
const a = 5;
const b = 7;
console.log(a & b);  //convert to binary and compare then return to normal number



//Nullish Coalescing Operator
let x = null;
let y = x ?? 5;
console.log("The value of y is: " + y);

const arr = [65, 2, 56, 2, 3, 12];
const arr1 = arr ?? [];
console.log("The value of arr1 is: " + arr1);

const obj = {
    product: "Mobile",
    price: 20000,
    color: "Blue",
 }

let product = obj.product ?? "Watch";
let brand = obj.brand ?? "Apple";
console.log("The product is " + product + " of the brand " + brand);



//Exponentiation Operator
let p = 2;
let q = 3;
let pow = p ** q;
console.log(pow);