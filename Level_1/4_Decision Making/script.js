// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement
let firstTemperature = 30;
let firstResult;
if(firstTemperature > 25){
    firstResult = "It is Hot Outside";
}
console.log("If statement:" , firstResult);


// Example 2: if...else statement
let secondTemperature = 20;
let secondResult;
if(secondTemperature > 25){
    secondResult = "It is Hot Outside";
}else{
    secondResult = "It is cold Outside";
}
console.log("If statement:" , secondResult);


// Example 3: else if statement
let time = 14;
let timeResult;
if(time < 12){
    timeResult = "Good Morning";
}else if(time < 18){
    timeResult = "Good Afternoon";
}else{
    timeResult = "Good Evening";
}
console.log(timeResult);


// Example 4: Nested if statements
// Decision logic
let age = 16;
let isWithParent = true;
let hasIDProof = true;
let nestedResult;
if(age >= 18){
    if(hasIDProof){
        nestedResult = "You can see the movie";
    }else{
        nestedResult = "You are not allowed inside the theater";
    }
}else{
    if(isWithParent){
        nestedResult = "You can visit the play area";
    }else{
        nestedResult = "You are not allowed visit the play area";
    }
}
console.log(nestedResult);


// Switch Statement
let day = "thurs";
let switchResult;
switch(day){
    case "mon":
        switchResult = "Monday";
        break;
    case "tue":
        switchResult = "Tuesday";
        break;
    case "wed":
        switchResult = "Wednesday";
        break;
    case "thurs":
        switchResult = "Thursday";
        break;
    case "fri":
        switchResult = "Friday";
        break;
    case "sat":
        switchResult = "Saturday";
        break;
    case "sun":
        switchResult = "Sunday";
        break;
    default:
        switchResult = "Invalid day";
}
console.log("Switch:",switchResult);


//Ternary Operator
let isAdmin = true;
let userRole = isAdmin ? "Am Admin" : "Am User";
console.log(userRole);
