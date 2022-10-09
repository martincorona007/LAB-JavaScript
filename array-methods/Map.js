import { students } from "./data/data_set.js";

let result0 = students.map((element,index)=> {
  if(element.age > 20 ){
    return true
  }
})
console.log("NEW " ,result0)
//====
                                            // ( return a object) remplace the 'return'
const result1 = students.map((element,index)=> ({
    ...element,
    name: element.name +" "+  element.lastname
}))

const result = students.map((element,index)=> {
 
  return {
    ...element,
    name: element.name +" "+  element.lastname
    
  }
  
})
//console.log(result1)

//====
//chaining objects
const result2 = students.map((element,index)=> ({
  ...element,
  name: element.name +" "+  element.lastname
})).map((element)=> ({...element,age: element.age * 2}))

//console.log(result2)
//====
//delete property
const result3 = students.map((element,index)=> {
 
  return {
    ...element,
    name: element.name +" "+  element.lastname
    
  }
  
}).map((element)=> {
  delete element.lastname
  return element;
})

//console.log(result2)
//console.log(result3)

