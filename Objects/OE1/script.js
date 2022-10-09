//Ways to create an object
let objectLiterals1 = {}
let objectLiterals2 = {
  "ramon": 39,
  "perez": 30
}
let contructorObject = new Object();
contructorObject.name = "Juan";
contructorObject.speed = "450";

function functionObject1(nameMovie,nameMainCharacter){
  this.nameMovie = nameMovie;
  this.nameMainCharacter = nameMainCharacter;
}
let createFunctionObject = new functionObject1("Big Bang thoery","sheldon");

class classObjectProduct{
  constructor(name,price,available){
    this.name = name;
    this.price = price;
    this.available = available;
  }
}
let obj1 = classObjectProduct("HP",900,1);

