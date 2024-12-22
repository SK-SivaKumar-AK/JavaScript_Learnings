//Object
const myObject = {
  name1 : "SivaKumar"
};
console.log(myObject.name1);


//another example
const anotherObj = {
  subscriber : true,
  number : 10000,
  nickname : "Siva",
  content : {
    earn : "JS",
    grow : "Stocks"
  },
  subdivision : ["earn" , "grow" , "give"],
  action : function(){
    return "Hello World "+`${this.content.earn}`;
  }
};
console.log(anotherObj);
console.log(anotherObj.subdivision);
console.log(anotherObj["subdivision"]);
console.log(anotherObj.subdivision[1]);
console.log(anotherObj.content.earn);
console.log(anotherObj.action());


//another example
const vehicle = {
  door : 2,
  engine : function(){
    return "Vrrooom!";
  }
}
console.log(vehicle.engine());


const car = Object.create(vehicle);
car.wheels = 4;
console.log(car);
console.log(car.engine());
car.engine = function(){
  return "Whoosh";
}
console.log(car.engine());


const tesla = Object.create(car);
console.log(tesla.door);
console.log(tesla.engine());



//Another exampe
const movie = {
  actor : "Kavin",
  music : "Arr",
  director : "Lokesh",
  producer : "Anbu"
};
console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(movie.hasOwnProperty("producer"));
delete movie.producer;
let i;
for(i in movie){
  console.log(`${i} : `+movie[i]);
}


//another example
const movie1 = {
  actor : "Kavin",
  music : "Arr",
  director : "Lokesh",
  producer : "Anbu"
};
const {music: myFavMusicDirector , director: myFavDirector} = movie1;
console.log(myFavMusicDirector , myFavDirector);


//another example
const movie2 = {
  actor : "Kavin",
  music : "Arr",
  director : "Lokesh",
  producer : "Anbu"
};
const {actor , music , director , producer} = movie2;
console.log(actor , music , director , producer);

function sing({music}){
  return music;
}
console.log(sing(movie2));