import { students,developers } from "./data/data_set.js";

//====Tradicional way
const cource = []
for(let i = 0 ; i < students.length; i++){
  if(students[i].course === 'Web Development'){
    cource.push(students[i]);
  }
}
//console.log("For ",cource)

const result1 = students.filter(function(stundet){
  if(stundet.course === 'Web Development'){
    return true
  }
})
//console.log(result1)

function age(element){
  if(element.age> 20){
    return true
  }
}
let result = students.filter(age)
//console.log("1 ",students);
//console.log("2 ",result);
