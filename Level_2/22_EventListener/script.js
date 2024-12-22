//addEventListeners(event , function , useCapture);

const initApp = ()=>{

  const view = document.querySelector("#view2");
  console.log(view);
  const div = view.querySelector("div");
  console.log(div);
  const h2 = div.querySelector("h2");
  console.log(h2);
  const nav = document.querySelector("nav");
  console.log(nav);

  const doSomething = ()=>{
    alert("Doing Something!");
  }
  h2.addEventListener("click" , doSomething , false);
  h2.removeEventListener("click" , doSomething , false);
  
  view.addEventListener("click" , (event)=>{
    //view.style.backgroundColor = "purple";
    //or
    view.classList.toggle("purple");
    view.classList.toggle("blue");
  }, false);
  div.addEventListener("click" , (event)=>{
    //div.style.backgroundColor = "blue";
    //or
    div.classList.toggle("green");
    div.classList.toggle("black");
  }, false);
  h2.addEventListener("click" , (event)=>{
    //event.stopPropagation();
    console.log(event.target);
    const myText = (event.target.textContent === "My")? event.target.textContent="SK" : event.target.textContent="My";
  }, false);
  nav.addEventListener("mouseover" , (event)=>{
    event.target.classList.add("height_100");
  });
  nav.addEventListener("mouseout" , (event)=>{
    event.target.classList.remove("height_100");
  });
}



document.addEventListener("readystatechange" , (event)=>{
  if(event.target.readyState === "complete"){
    console.log("completed!");
    initApp();
  }
})