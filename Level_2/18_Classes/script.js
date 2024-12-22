//Classes
const myPizza = {
  size : "medium",
  crust : "original",
  bake : function(){
    return `Baking a ${this.size} ${this.crust} crust pizza.`;
  }
}
console.log(myPizza.bake());

class pizza{
  constructor(type,size,crust){
    this.type = type;
    this.size = size;
    this.crust = crust;  
    this.toppings = [];
  }
  getTopping(){
    return this.toppings;
  }
  setToppings(toppingsPizza){
    this.toppings.push(toppingsPizza);
  }
  bake(){
    return `Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}.`;
  }
}
const anotherPizza = new pizza("veg","small" , "thin");
anotherPizza.setToppings("sausage");
anotherPizza.setToppings("egg");
console.log(anotherPizza.getTopping());
console.log(anotherPizza.bake());




//Another example
class pizza1{
  #sauce = "tomato";
  constructor(size){
    this.size = size;
    this.crust = "Original";
  }
  getCrust(){
    return this.crust;
  }
  setCrust(crustPizza){
    this.crust = crustPizza ;
  }
}

class specialPizza extends pizza1{
  constructor(size){
    super(size);
    this.type = "Margarita";
  }
  slice(){
    return `Our ${this.type} ${this.size} pizza has 8 slices`;
  }
}

const mySpecialpizza = new specialPizza("medium");
console.log(mySpecialpizza.slice());
console.log(pizza1.sauce);