//While loop
let i = 0;
while(i<=10){
    console.log(i);
    i=i+1;
}

//do-while
let j = 15;
do{
    console.log(j);
    j = j+1;
}while(j < 15)


//for loop
let k;
for(k=0; k<=20; k++){
    console.log(k);
}

let z;
for(z=0; z<=20; z++){
    if(z === 5){
        continue;
    }
    console.log(z);
}

let a;
for(a=0; a<=20; a++){
    if(a === 5){
        break;
    }
    console.log(a);
}