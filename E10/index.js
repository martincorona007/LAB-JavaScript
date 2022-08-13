const obj1 = {
  name: "Franki",
  lastName: "Rives",
  printInfo: function(){
    return `Your ${this.name} and ${this.lastName}`
  }
}
const moreInfo = function(age){
  console.log(`${this.printInfo()} and ${age} yeas`)
}
const print = moreInfo.bind(obj1)
print(3)
const print2 = moreInfo.call(obj1,5)
const print3 = moreInfo.apply(obj1,[50])