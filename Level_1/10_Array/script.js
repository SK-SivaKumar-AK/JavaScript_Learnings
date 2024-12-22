/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
let fruit = ["apple" , "Banana" , "Cherry"];
console.log(fruit);

// Accessing Array Elements:
console.log(fruit[1]);
console.log(fruit[3]);

// Change Value in Array
fruit[1] = "Orange";
console.log(fruit);



/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/
for(let i = 0; i < 3; i++){
    console.log(fruit[i]);
}



/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
console.log(fruit.length);
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}



// More Array Methods
let box = ["books" , "Toys" , "Pen"];
console.log(box);


/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/
box.push("dairy");
console.log(box);


/*
Remove element from array
Removes the last element from an array and returns that element.
*/
box.pop();
console.log(box);



/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
box.unshift("map" , "dairy");
console.log(box);


/*
Removes the first element from an array and returns that element.
*/
box.shift();
console.log(box);



// Anonymous Functions
box.forEach(function(x , index){
    console.log(x , index);
});
box.forEach((x , index) => {
    console.log(x , index);
});



// Combining Arrays
let containerOne = ["Tv" , "Laptop"];
let containerTwo = ["Playstation" , "table"];

let container = containerOne.concat(containerTwo);
console.log(container);



// Finding an Element Index, If not found it will return -1
let index = container.indexOf("Laptop");
console.log(index);



// Array with mixed data types
let mixedData = [10 , 3.14 , "Homelander" , true , undefined , null];
console.log(mixedData);
let result = mixedData.includes(10);
console.log(result);



// Array of Employee Objects
let employees = [
    {
        id : 1,
        name : "Sivakumar",
        age : 20
    },
    {
        id : 2,
        name : "karthick",
        age : 24
    },
    {
        id : 3,
        name : "sandy",
        age : 28
    }
];
employees.forEach((employee) => {
    console.log(employee.id);
    console.log(employee.name);
    console.log(employee.age);
});



//Fliters
let employeesData = employees.find((x) => {
    return x.id === 3;
});
console.log(employeesData);
let employeesAge = employees.filter((x) => {
    return x.age > 20;
});
console.log(employeesAge);



// Map
let yEmployee = employees.map((x) => {
    return `Name: ${x.name} , DOB: ${new Date().getFullYear() - x.age}`;
});
console.log(yEmployee); 