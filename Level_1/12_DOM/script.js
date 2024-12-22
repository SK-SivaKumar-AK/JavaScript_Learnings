/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName 
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/

//1.getElementById
let heading = document.getElementById("main-heading");

//Finding value
console.log(heading.innerHTML); //full content with tags
console.log(heading.textContent); // only content

//Change value
heading.innerHTML = "See, I am from Planet Earth";
function changeHeading(){
    setTimeout(() => {
        heading.textContent = "See, I am from Planet Mars";
    } , 3000);
}
changeHeading();




//2.getElementsByClassName 
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);
console.log(listItems.item(2));
console.log(listItems.item(2).innerHTML);

for(let i = 0; i < listItems.length; i++){
    console.log(listItems.item(i).innerHTML);
}
for(let i = 0; i < listItems.length; i++){
    listItems.item(i).innerHTML = `Modified Item ${i + 1}`;
}

const itemArr = Array.from(listItems);
console.log(itemArr);
itemArr.forEach((item) => {
    console.log(item);
});






//3.getElementsByTagName
const content = document.getElementById("content").getElementsByTagName("p");
console.log(content);

function contentItemStyle(){
    content.item(0).style.color = "red";
    content.item(1).style.fontsize = "14px";
    content.item(2).style.fontWeight = "700";
    content.item(3).style.backgroundColor = "pink";
}
contentItemStyle();

function contentStyle(){
    for(let j = 0; j < content.length; j++){
        content.item(j).style.paddingBottom = "6px";
    }
}
contentStyle();



//Remove element from dom
const message = document.getElementById("message");
setTimeout(() => {
    message.remove();
} , 3000);



//Adding element in dom
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph added dynamically";
newParagraph.style.color = "red";
newParagraph.classList.add("new-paragraph");
const container = document.getElementById("main");

container.appendChild(newParagraph);
//container.insertBefore(newParagraph , heading);
container.insertAdjacentHTML("beforebegin" , "<p>beforebegin</p>");
container.insertAdjacentHTML("afterbegin" , "<p>afterbegin</p>");

container.insertAdjacentHTML("beforeend" , "<p>beforeend</p>");
container.insertAdjacentHTML("afterend" , "<p>afterend</p>");




//4.querySelector
const subTitle = document.querySelector("#subtitle");
console.log(subTitle);
console.log(subTitle.textContent);




//5.querySelectorAll
const listItemQuery = document.querySelectorAll(".list-item");
console.log(listItemQuery); 
listItemQuery.forEach((item , index) => {
    console.log(`Index: ${index} , Item: ${item.textContent}`);
});