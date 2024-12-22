// Condition statement
let customerBanned = true;
let customerForced = false;
let customerQues = "SivaKumar Developer.";
let clientReplay;
if(customerBanned){
    clientReplay = `Sorry, Your restricted`;
}else if(customerQues && customerForced){
    clientReplay = `Yes I am ${customerQues}`;
}else{
    clientReplay = `Sorry ${customerQues} is busy.`;
}
console.log(clientReplay);



// scenerio

let testScore = 58;
let isCollegestud = true;
let studGrade;

if(testScore >= 90){
    studGrade = `A`;
}else if(testScore >= 80){
    studGrade = `B`;
}else if(testScore >= 70){
    studGrade = `C`;
}else if(testScore >= 60){
    studGrade = `D`;
}else{
    if(isCollegestud){
        studGrade = `RA`;
    }else{
        studGrade = `Fail`;
    }
}
console.log(studGrade);