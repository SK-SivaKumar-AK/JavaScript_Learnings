// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example
//debugger;
for(let i = 0; i < 5; i++){
    console.log(`Forloop let Iteration ${i}.`)
}
for(var j = 0; j < 5; j++){
    console.log(`Forloop var Iteration ${j}.`)
}


//Looping Backwards
for(let k = 5; k > 0; k--){
    console.log(`Forloop reverse let Iteration ${k}.`)
}


//Nested Loop
for(let a = 1; a <= 2; a++){
    console.log(`Outer Loop ${a}`);
    for(let b = 1; b <= 3; b++){
        console.log(`Inner Loop ${b}`);
    }
}


// While Loop Example
let balance = 10;
console.log(`Before while loop ${balance}`);
while(balance > 0){
    console.log(`Current balance ${balance}`);
    balance--;
}
console.log(`After while loop ${balance}`);



// Do While Loop Example
let num = 0;
do{
    console.log(`Number ${num}`);
    num++;
}while(num < 5);


//Break and continue
for(let l = 5; l > 0; l--){
    if(l === 3){
        break;
    }
    console.log(`Break Iteration ${l}.`);
}

for(let m = 5; m > 0; m--){
    if(m === 3){
        continue;
    }
    console.log(`Continue Iteration ${m}.`);
}



//function in loop

function greet(num){
    console.log("Hello world!" + num);
}
for(let n = 1; n <= 10; n++){
    greet(n);
}
