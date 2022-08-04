//document.querySelector("p").style.backgroundColor = "red";
// const nodeList = document.getElementsByClassName(".example");
// for(let i = 0; i < nodeList.length; i++){
//   nodeList[i].style.backgroundColor = "red";
// }

function Car(name,year,verification){
  this.name = name;
  this.year = year;
  this.verification = verification;
}
let car1 = new Car('Mercedez',1998,true);
console.log(car1);
Car.prototype.printData = function(){
  console.log(`print .... ${this.name} + ${this.year} ${this.verification}  `);
}
car1.printData();
console.log(car1);
let car2 =  new Car('BMW',1970,false);
car2.printData();
car2.prototype
// class Player {
//   constructor(name,team){
//     this.name = name;
//     this.team = team
//   }
//   print(){
//     console.log(` ${this.name} and ${this.team}`);
//   }
// }
// var p1 = new Player('Don','Barsa');
// console.log(p1);
// console.log(p1.print())


// function sum(x,y){ return x + y;}
// function sub(x,y){ return x - y;}
// function mul(x,y){ return x * y;}
// function div(x,y){ return x / y;}

// function calculator(number1, numeber2, functionCallBack){
//   console.log(`${number1} ${numeber2} ${functionCallBack}`);
//   return functionCallBack(number1,numeber2);
// }
// console.log(calculator(3,5,mul));


// let name1 = (x,b) => x + b;
// console.log(name1(3,3))


// function sum(a,b){ return a + b}

// function myCalculator(a,b,f){
//   if(a === f(a,b)){
//     console.log("YES");
//   }else{
//     console.log("NOP");
//   }
// }

// myCalculator(2,3,sum);

// (function(){
//   console.log("ACTION");
// })();


// let multiplier = (x,b) => x * b;

// console.log(multiplier(2,4));

// let F = () => console.log('Hello');
// console.log(F);


// const myArray = [1,2,3,4,5];
// let permutation = [3,4,5];
// console.log(permutation);
// permutation = [3,4,5,...myArray];
// console.log(permutation);
// const array =  [1,2,3,4,5];
// const array2 = Array.of('2',3,4,4,4,4);
// const arrays = new Array(5);

// const obj1 = {
//   key1: 'value',
// }

// const list = [1,7,3,43,5,8,9,5];

// console.log(list.indexOf(8));
// console.log(list.sort((a,b)=> b - a));
// console.log(list.splice(-4,6));
// const obj1 = {
//   k1: 'd1',
//   k2: 'd2',
//   k3: true,
//   k4: 5,
// }
// console.log(obj1);

// function functionCheck(list){
//   return list === 9;
// }
// function question(array,fun){
//   for(const nums of array){
//     console.log(nums)
//     if(fun(nums)){
//       return true;
//     }
//   }
//   return false;
// }

// let myArray = [3,9,4.3,6,0,7,2]
// console.log(question(myArray,functionCheck));


