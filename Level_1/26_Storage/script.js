localStorage.setItem("userName1" , "SivaKumar");
localStorage.setItem("userName2" , "SivaKarthick");

const username1 = localStorage.getItem("userName1");
const username2 = localStorage.getItem("userName2");
console.log(username1 , username2);

localStorage.removeItem("userName1");
localStorage.clear();



sessionStorage.setItem("day" , "white");
sessionStorage.setItem("night" , "black");

const theme1 = sessionStorage.getItem("day");
const theme2 = sessionStorage.getItem("night");
console.log(theme1 , theme2);

sessionStorage.removeItem("day");
sessionStorage.clear();




const user = {
    id : 1,
    Name : "SK",
    age : 24,
};
localStorage.setItem("user" , JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem("user")));

localStorage.removeItem("user");