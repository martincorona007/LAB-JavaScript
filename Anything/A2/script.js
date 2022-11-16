
function humanoide(n,y,p){
  this.name = n;
  this.years = y;
  this.price = p;
}
humanoide.prototype.print = function(){
    console.log("n ",this.name,"years",this.years,"p ",this.price)
}
let obj1 = new humanoide("Bitcoin",1998,70);
obj1.print()
console.log(obj1)

class Humanoides{
  constructor(n,y,p){
    this.names = n;
    this.yearss = y;
    this.prices = p;
  }
  prints(){
    console.log("n ",this.names,"years",this.yearss,"p ",this.prices)
  }
}
let obj2 = new Humanoides("Etherium",1992,29);
obj2.prints()
console.log(obj2)