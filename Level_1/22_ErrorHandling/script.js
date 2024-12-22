class bank{
    users = [
        {
            acctNo : 1234,
            balance : 1000,
            userName : "Sk",
            password : 123
        },
        {
            acctNo : 1235,
            balance : 2000,
            userName : "Siva",
            password : 234
        },
        {
            acctNo : 1236,
            balance : 3000,
            userName : "Kumar",
            password : 345
        },
    ];
    getBalancewithoutErrorHandling(accountNo){
        const result = this.users.find((x) => {
            return x.acctNo === accountNo; 
        });
        //console.log(result);
        console.log(`Balance: ${result.balance} , Account Number: ${result.userName}.`);
    }
    getBalancewithErrorHandling(accountno , password){
        try{
            const result = this.users.find((x) => {
                return x.acctNo === accountno; 
            });

            if(!result){
                throw `Invalid Account Number ${accountno}`;                
            }

            const isValidPassword = result.password === password;
            if(!isValidPassword){
                throw `Wrong Password`;
            }

            console.log(`Balance: ${result.balance} , Account Number: ${result.userName}.`);
            return `Balance: ${result.balance} , Account Number: ${result.userName}.`;
            
        }catch(error){
            console.log(error);
            return error;
        }finally{
            console.log(`Process is Completed`);
        }
    }
}

let stateBank = new bank();
console.log(stateBank.users);
//stateBank.getBalancewithoutErrorHandling(1236);
//stateBank.getBalancewithErrorHandling(1236 , 345);

const formElement = document.getElementById("formData");
const displayMessage = document.getElementById("displayMessage");

formElement.addEventListener("submit" , function(event){
    event.preventDefault();
    const formData = new FormData(this);
    const request = {};
    formData.forEach((value , key) => {
        request[key] = value;
    });
    let indianBank = new bank();
    const response = indianBank.getBalancewithErrorHandling(Number(request.accountNo) , Number(request.password));
    displayMessage.innerHTML = response;
    formElement.reset();
});
