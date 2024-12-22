class bankAccount{
    #balance // encapsulation private variable
    constructor(initialBalance){
        this.#balance = initialBalance;     //encapsulation setmethod
    }
    deposite(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited ${amount}. New Balance is ${this.#balance}`);
        }else{
            console.log("Invalid deposit amount.");
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdraw ${amount}. New balance is ${this.#balance}`);
        }else{
            console.log("Insuficient Fund");
        }
    }
    getBalance(){
        return this.#balance;   // encapsulation get method
    }
}
let savingsAcct = new bankAccount(1000);
savingsAcct.deposite(500);
savingsAcct.withdraw(200);
savingsAcct.withdraw(1500);
savingsAcct.deposite(-1000);

console.log(savingsAcct.getBalance());