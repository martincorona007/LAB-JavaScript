https://betterprogramming.pub/how-to-iterate-through-strings-in-javascript-65c51bb3ace5
// let myString = "Hello future3!";
// [...myString].forEach((element,index)=> {
//   console.log("[ ",element," - ",index," ]")
// })
// console.log(myString.lastIndexOf("e"))

const anyString = 'Brave, Brave New World';
[...anyString].forEach((element,index)=>{
  console.log("[ ",element," - ",index," ]");
})
console.log(anyString.indexOf('Brave')); // 0
console.log(anyString.lastIndexOf('Brave')); // 7