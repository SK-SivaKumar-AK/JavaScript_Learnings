function startEngine(){
    return `Engine is start`;
}
console.log(startEngine());


//Higher-order function
function drive(drivername , engine){
    const message = engine();  //Callback function
    console.log(`${message} by ${drivername}`);
} 
drive("Sivakumar" , startEngine);


//Pure function and no side effects
function add(a , b){
    return a + b;
}
console.log(add(2 , 3));
console.log(add(2 , 3));
console.log(add(2 , 3));


//Impure function
let counter = 0;
function increment(value){
    counter += value;
    return counter;
}
console.log(increment(2));
console.log(increment(2));
console.log(increment(2));