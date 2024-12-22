//Blob

var data = "Hello World";
var blob = new Blob([data], {
   type: 'text/plain'
});
// Using the fileReader object to read the blob
var reader = new FileReader();
reader.addEventListener("loadend", function (e) {
   var text = reader.result;
   console.log(text);
});
// Start reading the blob as text
reader.readAsText(blob);






// Creating file using Blob object
var data = "This file contains the content of the blob object.";
var blob = new Blob([data], {
   type: 'text/plain'
});
// Creating URL from Blob object
var url = URL.createObjectURL(blob);
var a = document.getElementById("download");
// Updating the `href` attribute's value
a.href = url;





//Object copies
const originalObject = { name: "Alice", age: 30 };
const copiedObject = Object.assign({}, originalObject);
console.log(originalObject);
console.log(copiedObject);