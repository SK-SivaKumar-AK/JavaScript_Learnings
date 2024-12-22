const earnMoney = () => {
    return "From Earn Money";
};

const growMoney = () => {
    return "From Grow Money";
};

const giveMoney = () => {
    return "From Give Money";
}

class subscriber{
    constructor(name){
        this.name = name;
    }
    emailme(){
        return `Hai I am ${this.name}. I am a developer.`;
    }
}

export default earnMoney;
export {growMoney , giveMoney , subscriber};