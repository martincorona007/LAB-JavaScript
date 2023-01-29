const promise = new Promise((resolve,reject)=>{
  if(false){
    resolve("It works!!");
  }else{
    reject("It dosen't work");
  }
})

promise.then((respose)=>{
  console.log("Y ",respose);
}).catch((respose)=>{
  console.log("ER: ",respose)
})

movePlayer(100,'left')
  .then(()=> movePlayer(400,'Left'))
  .then(()=> movePlayer(10,'Right'))
  .then(()=> movePlayer(330,'Left'))
async function playerStart(){
  await movePlayer(100,'left');
  await movePlayer(400,'left');
  await movePlayer(10,'right');
  await movePlayer(300,'left');
}

async function fetchUsers(){
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}
//----
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
//--
Promise.all(urls.map(
  url => fetch(url).then(resp => resp.json())

)).then(array => {
  console.log('users',array[0]);
  console.log('post',array[1]);
  console.log('albums',array[2]);
}).catch('ops')
//--
const getData = async function(){
  const [users,posts,albums] = await Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
  ))
  console.log('users',users);
  console.log('post',posts);
  console.log('albums',albums);
}
const getData2 = async function(){
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises){
    const data = await request.json();
    console.log(data);
  }
}