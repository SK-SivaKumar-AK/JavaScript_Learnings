//for...in
let car = {
    brand: "OD",
    model: "Q7",
    color: "Black",
}
for (key in car) {
    console.log(key + " -> " + car[key]);
}

let array = ["Hi", "Hello", 900, 23, true, "JavaScript"];
for (key in array) {
    console.log(key + " -> " + array[key]);
}


//for...of
const arr = ["JavaScript", "Python", "C", "C++", "HTML", "CSS"];
for (let ele of arr) {
    console.log(ele);
}



//next() Iterators     //Control the flow wheater the flow is completed or not
const fruits = ['apple', 'banana', 'cherry'];

// Create an iterator
const fruitIterator = fruits[Symbol.iterator]();

// Use next() to get values from the iterator
console.log(fruitIterator.next()); // { value: 'apple', done: false }
console.log(fruitIterator.next()); // { value: 'banana', done: false }
console.log(fruitIterator.next()); // { value: 'cherry', done: false }
console.log(fruitIterator.next()); // { value: undefined, done: true }