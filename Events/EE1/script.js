console.log("HELLO FUTURUE")
var emailList = new Array();
emailList[0] = new Array("President","Paul Smith", "psmith@gmain.com");
emailList[1] = new Array("Mr","laura stevens","hola@gmail.com");
emailList[2] = new Array("General manager","mary larsen", "mclaren@gmail.com");
for(let i = 0; i < emailList.length; i++){
  console.log("> ",emailList[i]);
  console.table(">> ",emailList[i]);
}
var myList = new Array("hello",true,4);
console.log(myList);
console.table(myList);
//4 ways to sawp variables in javascript
var a = 11, b = 22;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a = " + a + "; b = " + b);//
//===
temp = a;
a = b;
b = temp;
//===
a = a + b;
b = a - b;
a = a - b;
//===
[a,b] = [b,a]
