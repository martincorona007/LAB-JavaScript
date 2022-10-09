import { students } from "./data/data_set.js";

const result = students.some(function(students){
  //console.log(students.age);
  if(students.age < 21){
    return true
  }
})
//console.log(result)
const result0 = students.some((students)=>students.age < 21)
//console.log(result0)
