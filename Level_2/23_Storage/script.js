//API
document.addEventListener("readystatechange" , (event)=>{
  if(event.target.readyState === "complete"){
    console.log("Completed!");
    initApp();
  }
});

const initApp = ()=>{
  const myContent = ["Earn" , "Grow" , "Give"];
  const myObject = {
    name : "SivaKumar",
    myContent : ["Earn" , "Grow" , "Give"],
    logName : function(){
      console.log(this.name);
    }
  }
  window.sessionStorage.setItem("MySesssionStorage" , JSON.stringify(myObject));
  const mySessionDate = JSON.parse(window.sessionStorage.getItem("MySesssionStorage"));
  console.log(mySessionDate);
  //window.sessionStorage.removeItem();

  window.localStorage.setItem("MySesssionStorage" , JSON.stringify(myObject));
  const myLocalDate = JSON.parse(window.localStorage.getItem("MySesssionStorage"));
  console.log(myLocalDate);
  //window.localStorage.removeItem();
}