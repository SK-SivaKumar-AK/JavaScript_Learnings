//scope
let a = 1;
a=2;
console.log(a);


const b=1;
//b=2;
console.log(b);


//global scope
var x=1;
let y=2;
const z=3;


//local scope == block scope
{
   let y=3;
}

//local scope == function scope
function myFunc(){
    const z = 4;
}

console.log(x);
console.log(y);
console.log(z);



//activities
let l = 1;
let m = 2;
let n = 3;
console.log(`Global: ${l}`);
console.log(`Global: ${m}`);
console.log(`Global: ${n}`);

function myFun(){
    let n = 4;
    console.log(`Function: ${l}`);
    console.log(`Function: ${m}`);
    console.log(`Function: ${n}`);
    if(true){
        let m = 5;
        console.log(`Function_block: ${l}`);
        console.log(`Function_block: ${m}`);
        console.log(`Function_block: ${n}`);
    }
}
myFun();

