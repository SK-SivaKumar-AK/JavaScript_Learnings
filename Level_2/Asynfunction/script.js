//https://httpbin.org/post
//https://jsonplaceholder.typicode.com/users
//Async
console.log("First");
console.log("Second");
console.log("Third");

console.log("First");
setTimeout(()=>{
    console.log("Second");
},2000);
console.log("Third");




// pending, fullfilled, rejected
const myPromise = new Promise((resolve , reject) => {
    const error = true;
    if(!error){
        resolve("Yes! Its resolved.");
    }else{
        reject("No!, Its rejected.")
    }
});
console.log(myPromise);
myPromise.then((value) => {
    return value + " Welcome";
}).then((newValue) => {
    console.log(newValue);
}).catch((err) => {
    console.log(err);
});


const users = fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json();
}).then((users) => {
    console.log(users);
});
console.log(users);






//Async and Await
const myUser = {
    userList : []
}
const anotherUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();
    //console.log(userData);
    return userData;
};

const anotherFun = async () => {
    const data = await anotherUser();
    myUser.userList = data;
    console.log(myUser);
    return data;
};

anotherFun();
console.log(myUser);



//fetch get 
const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/" , {
        method : "GET",
        headers : {
            Accept : "application/json"
        }
    });
    const jsonJokesData = await response.json();
    console.log(jsonJokesData);
};
getDadJoke();




//fetch post 
const jokeObject = {
    id: "V0wkbprcprc",
    joke: "If you want a job in the moisturizer industry, the best advice I can give is to apply daily."
};
const postDadJoke = async (data) => {
    const response = await fetch("https://httpbin.org/post" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    });
    const jsonJokesData = await response.json();
    console.log(jsonJokesData);
};
postDadJoke(jokeObject);