// COde challenge
let myName = "Sivakumardeveloper";
let myIndex = Math.floor(Math.random() * myName.length);  // Ensure the index is within the name's length
console.log(myIndex+1);  // Optional: To show the 1-based index
console.log(myName.at(myIndex));  // Corrected to get the character at the random index