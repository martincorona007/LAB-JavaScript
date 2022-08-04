function speakSomething(){//function expression
  console.log("Speaking");
}
//functions are objects
var speakSomething = function(){//anonymous function
  console.log('Speak something');
};
var obj = {
  sayHello: function(){//anonymous function
    console.log("hello");
  }
}
obj.sayHello();
//==================================
//callback functions
//def function that's passed as an argument into another function and executed in that function
//functions are an integral part of asynchronous programming
function doubleIt(number){
  return (number*=2);
}
var myNumbers = [1,2,3,4,5];
var myDoubles = myNumbers.map(doubleIt);
//
myNumbers.forEach(function(number){
  console.log("My array contains", number);
});
//
doubleIt = number => (number *= 2);
// synchronous
// 1
// 2
// 3
// 4
// asynchronous
// 1
// 2 2.1 2.2 2.3 2.4 2.5
// 3
// 4 4.1 4.2 4.3
// 5
//**
//Callbacks
//**
//               url                              callback
jQuery.get("https://httpbing.org/get?data=1",function(response){//with one it's simple enough
  //now i have some data callback gets a response from the server
})
jQuery.get("https://httpbing.org/get",function(response){
  //now i have some data
  jQuery.get("https://httpbing.org/get",function(response){
  //now i have some data
    jQuery.get("https://httpbing.org/get",function(response){
      //now i have some data
    })
  })
});

//**
//PROMISES
//**
//def : promises are object that capture the result of an ascrynchronous action, with a particular programming interface or API for handing when the promised data
//one promise
anxios.get("https://httpbing.org/get").then(function(response){
  //now i have some data
})
//multiple promises in sequence, no nesting
axios
  .get("https://httpbing.org/get")
  .then(function(response){
    //now i have some data
    return axios.get("https://httpbing.org/get");
  })
  .then(function(response){
    return axios.get("https://httpbing.org/get");
  });
//**
//Async / Await
//**
//mulplte requests
async function getOneThing(){
  var response1 = await axios.get("https://httpbing.org/get");
  var response2 = await axios.get("https://httpbing.org/get");
  var response3 = await axios.get("https://httpbing.org/get");
  
}


//=====================================================================
Cake.prototype.bake = function(temp,minutes){
  //bake a cake at a particular temperatura
  //for a number of minutes
}