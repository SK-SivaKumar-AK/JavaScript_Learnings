let john = {
    firstname : "John",
    lastname : "Doe",
    dob : 1992,
    phoneNo : 9874563210,
    isEmployed : true,
    getDetails : function(){
        const age = new Date().getFullYear() - this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`);
    },
    getEmployementStatus : function(){
        console.log(`${this.firstname} is ${this.isEmployed ? "employed" : "unemployed"}`);
    },
};
console.log(john);
john.getDetails();
john.getEmployementStatus();


let jane = {
    firstname : "Jane",
    lastname : "Doe", 
    dob : 1997,
    phoneNo : 9874563211,
    isEmployed : false,
    getDetails : function(){
        const age = new Date().getFullYear() - this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`);
    },
    getEmployementStatus : function(){
        console.log(`${this.firstname} is ${this.isEmployed ? "employed" : "unemployed"}`);
    },
};
console.log(jane);
jane.getDetails();
jane.getEmployementStatus();





//Classes
class person{
    constructor(firstname , lastname , dob , phoneNo , isEmployed){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.phoneNo = phoneNo;
        this.isEmployed = isEmployed;
    }
    getDetails(){
        const age = new Date().getFullYear() - this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`);
    }
    getEmployementStatus(){
        console.log(`${this.firstname} is ${this.isEmployed ? "employed" : "unemployed"}`);
    }
}

let anni = new person("Siva" , "Kumar" , 1998 , 9874563210 , true);
anni.getDetails();
anni.getEmployementStatus();

let antony = new person("Antony" , "Kumar" , 1999 , 9874563215 , false);
antony.getDetails();
antony.getEmployementStatus();