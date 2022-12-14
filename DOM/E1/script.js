// var bt1 = document.getElementsByTagName("button")[0];
// bt1.addEventListener("click",function(){
//   console.log("Clicking")
// })
var bt2 = document.getElementById("clickbutton");
var input = document.getElementById("userinput"); 
var ul = document.querySelector("ul");
//console.log(input)
// bt2.addEventListener("click",function(){
//   if(input.value.length > 0){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }

// })
// input.addEventListener("keypress",function(event){
//   // console.log(event);
//   // console.log(event.which);
//   if(input.value.length > 0 && event.keyCode ===13 && event.code ==="Enter"){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// })

//USING DRY(DONT REPEAT YOURSELF)
function inputLength(){
  return input.value.length;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
//ALTERNATIVE A
// bt2.addEventListener("click",function(){
//   createListElement();
// })
// input.addEventListener("keypress",function(event){
//   createListElement();
// })
//ALTERNATIVE B
function addListAfterClick(){
  if(inputLength() > 0){
    createListElement();
  }
}
function addListAfterKeypress(event){
  if(inputLength() > 0 && event.keyCode ===13 && event.code ==="Enter"){
    createListElement();
  }
}
bt2.addEventListener("click",addListAfterClick)
input.addEventListener("keypress",addListAfterKeypress)
//input.addEventListener("keypress", addListAfterKeypress(event));
//This is something called a callback function. When that line of javascript runs, we don't want the addListAfterClick function to run because we are just adding the event listener now to wait for click or keypress. We want to let it know though that we want this action to happen when a click happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.