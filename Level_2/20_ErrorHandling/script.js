//Error handling
"use strict";

const variable = "sivakumar";
console.log(variable);
//variable1 = "sivakumar";   //Reference error
//console.log(variable1);
//variable ="sk";               //Type error

//console..log("hai");          //syntax error



//try, catch, Finally
const makeError = () => {
  try{
    const name = "kumar";
    throw new Error( "This is custom error message");
  }catch(err){
    console.error(err); 
  }finally{
    console.log("...finally");
  }
}
makeError();