import { students,developers } from "./data/data_set.js";
//====Tradicional way
let sumAges = 0;
for(let i = 0 ; i < students.length; i++){
  sumAges += students[i].age;
}
//console.log(sumAges)
//===ES5
let result = students.reduce(function(count,students){
  console.log("a ",count);
  console.log("b " ,students.age)
  return count + students.age
},0)
console.log("==? ",result)
//===ES6
let result0 = students.reduce((count,element)=> count + element.age,0);
//console.log(result0)

const result1 = developers.reduce(function(allSkills,students){
  //return [...allSkills,...students.skills] // output ?
  //return new Set([...allSkills,...students.skills]) // output ?
  return Array.from(new Set([...allSkills,...students.skills])) // output ?
},[])
console.log(result1)