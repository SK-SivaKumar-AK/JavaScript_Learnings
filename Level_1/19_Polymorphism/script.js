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

class Employee extends person{
    constructor(firstname , lastname , dob , phoneNo , isEmployed , jobTitle , company){
        super(firstname , lastname , dob , phoneNo , isEmployed);
        this.jobTitle = jobTitle;
        this.company = company;
    }
    //Overriding here
    getDetails(){
        const age = new Date().getFullYear() - this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old work as a ${this.jobTitle} at ${this.company}`);
    }
    getJobDetails(){
        console.log(`${this.firstname} ${this.lastname} work as a ${this.jobTitle} at ${this.company}`);
    }
}

//overriding
let employeeOne = new Employee("aravind" , "Kumar" , 1990 , 9874563215 , true , "developer" , "tech Corp");
employeeOne.getDetails();


//Overloading
let persons = new person("Antony" , "Kumar" , 1999 , 9874563215 , false);
persons.getDetails();