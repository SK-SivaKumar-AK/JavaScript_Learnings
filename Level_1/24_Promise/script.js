let promises = new Promise((resolve , reject) => {
    let data = 5;
    if(typeof(data) === "number"){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

promises.then((result) => {
    console.log(`On Resolve: ${result}`);
}).catch((error) => {
    console.log(`On Reject: ${error}`);
});


//Another example
function fetchData(){
    return new Promise((resolve , reject) => {
        console.log(`Fetching data...`);

        setTimeout(() => {
            const data = {
                id : 1,
                names : "SK",
            };
            const randomValue = Math.random();
            console.log(randomValue);
            const success = randomValue > 0.2;
            if(success){
                resolve(data);
            }else{
                reject("Failed");
            }
        } , 2000);
    });
}

fetchData().then((result) => {
    console.log(`Data fetched: ${result.names}`);
}).catch((error) => {
    console.log(`Error: ${error}`);
});


let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Promise 1 Resolved`);
    } , 2000);
});
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Promise 2 Resolved`);
    } , 1000);
});
let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Promise 3 Resolved`);
    } , 3000);
});

promise1.then((result) => {
    console.log(result);
});
promise2.then((result) => {
    console.log(result);
});
promise3.then((result) => {
    console.log(result);
});



//all promise completed
Promise.all([promise1 , promise2 , promise3]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

//First promise completed
Promise.race([promise1 , promise2 , promise3]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});