//Set
const num_set = new Set([10, 20, 20, 20]);
for (let value of num_set.values()) {
    console.log(value);
}

const set1 = new Set(["BMW", "Audi", "TATA"]);
const set2 = new Set(["BMW", "TaTa", "Honda", "Suzuki"]);
const union = new Set([...set1, ...set2]); // Taking union
for (let value of union.values()) {
    console.log(value);
}




//WeakSet()
const weak_set = new WeakSet(); 
// Creating the car object
const car = {
    brand: "Audi",
    model: "Q5",
};
// Adding the car object to the WeakSet
weak_set.add(car);
console.log(weak_set);




//Map
const map = new Map([["Apple", 100], ["Banana", 20], ["Orange", 50]]);
for (let [key, value] of map) {
    console.log( `${key} : ${value}`);
}


//Weakmap
const wm = new WeakMap();
const laptop = {
    brand: "HP",
    model: "Pavilion",
}
wm.set(laptop, 100000);
console.log(wm);



//Reflect
const cars = {
    name: "Audi",
    model: "Q6",
    price: 7000000,
 }
 let prop = "model";
 let model = Reflect.get(cars, prop);
 console.log(model);
 const models = Reflect.set(cars, "doors", 4);
 console.log(models);



//Typed array
const array = new Int8Array([1000, 200, 30, 40]);
console.log("The array is: " + array);