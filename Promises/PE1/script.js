function promiseToMom(isCompleted){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(isCompleted){
        resolve("I did it");
      }else{
        reject("Sorry mom");
      }
    },5* 1000)
  })
}
let cleanDishes = promiseToMom(false);

cleanDishes.then(
  (sucess)=> console.log(sucess)
  ).catch(
    (reason)=> console.log(reason)
    ).finally(
      console.log("finally")
      )
let promiseToMom2 = new Promise((resolve,reject)=>{
  if(false){
    resolve("Task resolve");
  }else{
    reject("Task rejected");
  }
})
promiseToMom2.then((success)=>{console.log(success)}).catch((reason)=>{console.log(reason)});