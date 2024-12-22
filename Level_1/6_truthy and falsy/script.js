// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values:
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Truthy Values:
console.log(Boolean(1));
console.log(Boolean(123));
console.log(Boolean(-1));
console.log(Boolean("Hello"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function(){}));


//Example
let cash = 90;
let cashResult;
if(cash){
    if(cash > 100){
        cashResult = "You can buy burger";
    }else{
        cashResult = "You can only buy burger";
    }
}else{
    cashResult = "You can't buy burger";
}
console.log(cashResult);