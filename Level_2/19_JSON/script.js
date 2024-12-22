//Json
const myObj = {
  name : "Sivakumar",
  content : "Developer",
  sub : function(){
    return "Thanks for using this code.";
  }
}
console.log(myObj);
console.log(myObj.name);
console.log(myObj.sub());

const sendJson = JSON.stringify(myObj);
console.log(sendJson);

const receive = JSON.parse(sendJson);
console.log(receive);