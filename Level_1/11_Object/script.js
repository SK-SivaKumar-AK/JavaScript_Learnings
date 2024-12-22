let person = {
    name : "Sivakumar",
    age : 21,
    isEmployed : true,
};
console.log(person);
console.log(person.name);
console.log(person.age);


// Adding a new property
person.city = "Trichy";
console.log(person);

// Modifying an existing property
person.age = 25;
console.log(person);

// Object with method
let car = {
    brand : "Tata",
    model : "Nano",
    year : 2022,
    displayInfo : function(){
        return `${this.brand} ${this.model} ${this.year}.`;
    }
};
console.log(car);
console.log(car.displayInfo());

// Destructuring assignment
let student = {
    names : "Karthick",
    age : 24,
    course : "mechanical"
};
let {names , age , course} = student;
console.log(names , age , course);


//Nested Complex Objects
let resturant = {
    names : "kannappa",
    location : "Trichy",
    owner : {
        ownerName : "Sk",
        age : 50,
        contact : {
            email : "sk@gmail.com",
            phone : "987456321"
        },
    },
    menu : [
        {
            dish : "chicken masala",
            price : 50,
            spicy : true,
        },
        {
            dish : "mutton masala",
            price : 80,
            spicy : true,
        },
        {
            dish : "pongal",
            price : 20,
            spicy : false,
        },
    ],
};



// Accessing properties of the nested objects
console.log(resturant);
console.log(`Welcome to ${resturant.names} in ${resturant.location}`);
console.log(`Owned by ${resturant.owner.ownerName}, age ${resturant.owner.age}.`);
console.log(`Contact by ${resturant.owner.contact.email}, ${resturant.owner.contact.phone}.`);
resturant.menu.forEach((item) => {
    console.log(`${item.dish} : Rs. ${item.price} (${item.spicy ? 'Spicy' : 'Not Spicy'})`);
});



// Destructure owner object
let {ownerName : ownerNames , age : ownerAge , contact : {email :ownerEmail , phone : ownerPhone}} = resturant.owner;

// Output details about the restaurant
console.log(`Owned by ${ownerNames}, age ${ownerAge}.`);
console.log(`Contact by ${ownerEmail}, ${ownerPhone}.`);



// Output the menu items using destructuring within forEach
resturant.menu.forEach(( {dish , price , spicy} ) => {
    console.log(`${dish} : Rs. ${price} (${spicy ? 'Spicy' : 'Not Spicy'})`);
});

resturant.menu.forEach(( {dish : menuDish , price : menuPrice , spicy : menuSpicy} ) => {
    console.log(`${menuDish} : Rs. ${menuPrice} (${menuSpicy ? 'Spicy' : 'Not Spicy'})`);
});