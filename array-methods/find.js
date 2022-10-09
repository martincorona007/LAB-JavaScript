import { students } from "./data/data_set.js";

let result = students.find((element)=> element.course === 'Accounting')
//console.log(result)
let result0 = students.find(function(element){
  if(element.age === 20){
    return 1
  }
})
console.log(result0)