//1
async function getUsers(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users/")
  const data  = response.json()
  console.log(data)
}
//2
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
const getData = async function () {
  try{
    const [users, posts, albums] = await Promise.all(urls.map( async (url) =>{ 
        const response = await fetch(url)
        const data = response.json();
        return data;
      }
    ))
    
    
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);

  }catch(error ){
    console.log("ouch ",error)
  }

};
















// const promise = new Promise((resolve,rejected)=>{
//   setTimeout(()=>{
//     resolve("sucess");
//   },4000)

// })
// promise.then((response)=>{console.log(response)})

// Promise.reject('failed').catch(()=> console.log('Ooops something went wrong'))

// const urls = [
//   'https://swapi.dev/api/people/1',
//   'https://swapi.dev/api/people/2',
//   'https://swapi.dev/api/people/3',
//   'https://swapi.dev/api/people/4'
// ]
// const prom = new Promise.all(urls.map((url)=>{
//   fetch(url).then((response)=> {console.log(response.json())}).catch(()=> {console.log("ops")})
// }))
// const urls = [
//   'https://swapi.dev/api/people/1',
//   'https://swapi.dev/api/people/2',
//   'https://swapi.dev/api/people/3',
//   'https://swapi.dev/api/people/4'
// ]

// Promise.all(urls.map(url=>{
//   return fetch(url).then((response)=> response.json())
// })).then(response=>{console.log("1 ",response[1])})
// .catch(eerr=> console.log("nope ",eerr))

// Promise.all(urls.map(url=>{ return fetch(url).then((response)=> response.json())}))
// Promise.all(urls.map(url=>fetch(url).then((response)=> response.json())))

// const obj1 = {
//   name: "Franki",
//   lastName: "Rives",
//   printInfo: function(){
//     return `Your ${this.name} and ${this.lastName}`
//   }
// }
// const moreInfo = function(age){
//   console.log(`${this.printInfo()} and ${age} yeas`)
// }
// const print = moreInfo.bind(obj1)
// print(3)
// const print2 = moreInfo.call(obj1,5)
// const print3 = moreInfo.apply(obj1,[50])