let myBoolean1 = alert("Hi subscribers");
console.log(myBoolean1);

let myBoolean2 = confirm("Hi subscribers");
console.log(myBoolean2);

let myBoolean3 = prompt("Enter Your Name");
let userInput;
let inputLength;
if(myBoolean3){
    userInput = myBoolean3 ?? "1You didn't Enter Your Name.";
    inputLength =userInput.trim().length;
}else{
    userInput = "2You didn't Enter Your Name.";
    inputLength ="";
}
console.log(userInput);
console.log(inputLength);