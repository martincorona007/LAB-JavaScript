import { students,points } from "./data/data_set.js";

//====Tradicional way
for(let i = 0; i < students.length; i++){
  //console.log('for ',students[i])
}

// students.forEach(function(element,index){
//   console.log(element)
//   console.log(`=> ${index}`);
// })

students.forEach((element,index,points)=>{
  console.log(element);
  console.log(" ",index);
  console.log("== ",points)
})