import { students,points } from "./data/data_set.js";

const result0 = students.sort(function(first,second){
  //console.log("A ",first.age," B ",second.age);
  if(first.age > second.age){
    return 1;
  }else{
    return -1;
  }
})
//console.log(result0)
const result1 = students.sort((a,b)=> a.age > b.age ? 1: -1);
const result2 = students.sort((a,b)=> a.age < b.age ? 1: -1);
const result3 = students.sort((a,b)=> a.age - b.age)
