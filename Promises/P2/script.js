const p1 = new Promise((res,rej)=> {
  setTimeout(()=> rej("One"),1000);
});
const p2 = new Promise((res,rej)=> {
  setTimeout(()=> res("Two"),2000);
});
const p3 = new Promise((res,rej)=> {
  setTimeout(()=> res("Three"),3000);
})
Promise.any([p1,p2,p3])
  .then((result)=> console.log(result))
  .catch((error)=> console.log(error));