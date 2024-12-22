//Module
import earnMoney from "./anotherscript.js";
import { growMoney as grow, giveMoney as give } from "./anotherscript.js";
import { subscriber } from "./anotherscript.js";

console.log(earnMoney());
console.log(grow());
console.log(give());

const me = new subscriber("SivaKumar");
console.log(me.emailme());