import { students } from "./data/data_set.js";
function isLessThan(element){
  console.log(element.age)
  if(element.age > 21){
    return true;
  }
}
let result = students.every(isLessThan)
console.log(result)