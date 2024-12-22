// Arrays
const myArray = [];

//Adding element
myArray[0] = "Siva";
myArray[1] = "Kumar";
myArray[2] = 10000;
myArray[3] = true;

console.log(myArray);
console.log(myArray.length);

//methods
myArray.push("Click");
console.log(myArray);
console.log(myArray.length);

let removeItem = myArray.pop();
console.log(removeItem);
myArray.pop();
console.log(myArray);
console.log(myArray.length);

myArray.unshift("Click");
console.log(myArray);
console.log(myArray.length);

let removeFirstItem = myArray.shift();
console.log(removeFirstItem);
myArray.shift();
console.log(myArray);
console.log(myArray.length);


//delete myArray[1];
console.log(myArray);

const newArray = [...myArray , ...myArray];
console.log(newArray);



//multitimention

const earnMoneyA = ["Frontend" , "Backend" , "FullStack"];
const earnMoneyB = ["AI" , "Blockchain" , "DataAnalytics"];
const earnMoneyc = ["AI1" , "Blockchain1" , "DataAnalytics1"];

const earnMoney = [earnMoneyA , earnMoneyB];
console.log(earnMoney);
console.log(earnMoney[0][1] , earnMoney[0][2]);

const earnMoney1 = [earnMoney , earnMoney, earnMoney];
console.log(earnMoney1);
console.log(earnMoney1[0][0][1]);
