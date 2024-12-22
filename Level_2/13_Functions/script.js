// Functions
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(10,2));
console.log(sum(154,2));
console.log(sum(100,2));


//activities
let email = "siva@gmail.com";
let atposition = email.indexOf("@");
console.log(email.slice(0,atposition));



//another activities
function getUserNameFromEmail(email){
    return email.slice( 0 , email.indexOf("@"));
}
console.log(getUserNameFromEmail("sivakumar@gmail.com"));


//another activities
const toProperCase = function (name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("sIVAKUMAR"));


//another activities
const toProperCasee = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCasee("sIVAKUMAR"));