function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                Name : "SK",
                id : 1
            };
            resolve(data);
        }, 2000);
    })
}

// fetchData().then((result) => {
//     console.log(result);
// });


function getUser(){
    console.log("fetching data...");
    try{
        const datass = fetchData();
        console.log(datass); 
    }catch(error){
        console.log(error);
    }
}
getUser();

async function getUserAsync(){
    console.log("fetching data...");
    try{
        const datass = await fetchData();
        console.log(datass); 
    }catch(error){
        console.log(error);
    }
}
getUserAsync();