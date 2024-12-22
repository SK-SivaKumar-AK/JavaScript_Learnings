//DOM
const view1 = document.getElementById("view1");
console.log(view1);


const view2 = document.querySelector("#view2");
console.log(view2);


view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";



const views = document.getElementsByClassName("view");
console.log(views);


const sameView = document.querySelectorAll(".view");
console.log(sameView);


const divs = view1.querySelectorAll("div");
console.log(divs);


const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);



const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs[4].style.backgroundColor = "purple";
let i;
for(i=0; i < evenDivs.length; i++){
  evenDivs[i].style.width = "150px";
  evenDivs[i].style.backgroundColor = "green";
}
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);



view2.lastElementChild.remove();
const createDiv = (parent , iter)=>{
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.backgroundColor = "white";
  newDiv.style.color = "black";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  
  parent.append(newDiv);
}
let j;
for(j=1; j<11; j++){
  createDiv(view2, j);
}


const navText = document.querySelector("nav");
console.log(navText);
navText.innerHTML = "<h1>This is my Page</h1>";


const navText1 = document.querySelector("nav h1");
console.log(navText1);
navText1.textContent = "Hello World";

navText.style.justifyContent = "center";