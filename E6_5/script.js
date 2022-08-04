//let isEmpty = false
try{
  console.log(isEmpty);
}catch(e){
  console.log("ERROR ",e);
}
// class Node{
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack{
//   constructor(){
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   add(value){
//     const newNode = new Node(value);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode
//     }else{
//       const temp = this.head;
//       this.head = newNode;
//       this.head.next = temp
//     }
//     this.length++;
//     return this;
//   }
//   remove(){
//     if(!this.head) return null;
//     let temp = this.head;
//     this.head = this.head.next;
//     this.length --;
//     return temp.value;
//   }
// }
// let d1 = new Stack();
// d1.add(2);
// d1.add(4);
// d1.remove();
// d1.add(5);
// console.log(d1);
// let arr = new Array('1',2,3);
// console.log(arr)
// let obj = new Object({'b':3,'a':'3'});
// console.log(obj)
// async function getGitHubData(){
//   let data = await fetch('https://api.github.com/users/KrunaLathiya');

//   let main = await data.json();
//   console.log(main);
// }