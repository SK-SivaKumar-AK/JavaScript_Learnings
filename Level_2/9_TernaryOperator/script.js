//conditional statement
let subscriber = "Subscriber";
let response = subscriber ? "Welcome" : "Kindly Subscribe";
console.log(response);


//code
let testScore = 89;
let grade = testScore > 90 ? "A" : testScore > 80 ? "B" : testScore > 70 ? "C" : "Fail";
console.log(grade);


let player = "rock";
let computer = "Sissor";
let result = player === computer ? "Tie" : player === "rock" && computer === "paper" ? "Computer Wins" : player === "paper" && computer === "sissor" ? "Computer Wins" : player==="sissors" && computer==="rock" ? "Computer Wins" : "Player Wins";
console.log(result);