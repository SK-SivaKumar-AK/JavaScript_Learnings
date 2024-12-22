const button = document.getElementById("button");
console.log(button);

button.addEventListener("click" , ()=> {
    alert("Button Clicked");
}); 

button.addEventListener("mouseover" , ()=> {
    button.classList.add("buttonHover");
});

button.addEventListener("mouseout" , ()=> {
    button.classList.remove("buttonHover");
});

document.addEventListener("keydown" , (event) => {
    if(event.key === "Enter"){
        //alert("Enter key is pressed");
    }
});

document.addEventListener("keypress" , (event) => {
    if(event.key === "Enter"){
        //alert("Enter key is pressed");
    }
});

document.addEventListener("keyup" , (event) => {
    if(event.key === "Enter"){
        //alert("Enter key is pressed");
    }
});

document.addEventListener("keydown" , (event) => {
    if(event.shiftKey){
        alert("Shiftey is pressed");
    }
    if(event.ctrlKey){
        alert("ctrlKey is pressed");
    }
    if(event.key >= "a" && event.key <= "z"){
        alert(`${event.key} key is pressed`);
    }
    if(event.key >= "0" && event.key <= "9"){
        alert(`${event.key} key is pressed`);
    }
});