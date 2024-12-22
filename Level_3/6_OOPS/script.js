//Static
class Table {
    static printSize() {
        return "The size of the table is: 20 x 20 <br>";
    }

    getColor() {
        return "Black";
    }
}

console.log(Table.printSize()); // Static method execution
const tableObj = new Table();
console.log(tableObj.getColor());




//Array destructuring
const arr = ["Apple", "Banana", "Watermelon"];

const [fruit1, fruit2, fruit3] = arr;
console.log(fruit1 , fruit2 , fruit3);


//Object destructing
const watch = {
    brand: "Titan",
    price: 6000,
 }
 const {brand, price} = watch;
 console.log(brand , price);

 const watchs = {
    brand: "Titan",
    color: "Pink",
    dial: "Round",
 }
 const { brand: bd, color: cr, dial: dl } = watchs;
 console.log(bd , cr , dl);



 const car = {
    brands: "Hyundai",
    model: "Verna",
    info: {
       prices: 1200000, // Nested properties
       color: "white",
    }
 }
 const { brands, model, info: { prices, color } } = car;
 console.log(brands , model , prices , color);

 const carss = {
    brandss: "Hyundai",
    model: "Verna",
    info: {
       pricess: 1200000, // Nested properties
       color: "white",
    }
 }
 const {brandss: company, model: name, info: {pricess: cost, color: carColor }} = carss;
 console.log(company , name , cost , carColor);




//Object.assign()   like extand
const eat = {
    eatFood() {
       console.log("Person is eating the food! <br>");
    }
 }
 const drink = {
    drinkWater() {
        console.log("Person is drinking water!");
    }
 }
 const person = {
    name: "John",
 }
 Object.assign(person, eat, drink); // Mutiple Mixins
 person.eatFood();
 person.drinkWater();




 //Proxy()
 const personss = {
    name: "Same",
    age: 32,
 }
 const handler = {
    // Defining the getters
    get: function (object, property) {
       return object[property] ? object[property] : 
       'Object doesnt contain the property.';
    }
 }
 const proxyObj = new Proxy(personss, handler);
 console.log(proxyObj.height);