//convert string to character Array
let name = 'rabi'
console.log(name.split(''));
console.log(Array.from(name));
console.log([...name]);

//currying 
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
//compose
const compose = (f,g) => (a) => f(g(a));
const sum = (sum) => num * 1;
compose(sum,sum)()

// side-effects = we alter the value or the variable 
// pure function = simple returns a value

// HTTP = Hypertext Transfer Protocol


// JSON
// {
//   "employees"
//   [
//     {"firstname":"Jhon","lastname":"doe"},
//     {"firstname":"Anna","lastname":"Fletcher"},
//     {"firstname":"Peters","lastname":"Jones"}
//   ]
// }
// XML
// <employees>
//   <employe>
//     <firstname>Jhon</firstname><lastname>Doe</lastname>
//   </employe>
//   <employe>
//     <firstname>Anna</firstname><lastname>Fletcher</lastname>
//   </employe>
//   <employe>
//     <firstname>Peters</firstname><lastname>Jones</lastname>
//   </employe>
// </employees>

// JSON.parse()
// this function takes a json and return an object
// var obj = JSON.parse('{"name":"John","age":"30","city":"New York"}');
// JSON.stringify()
// this function takes a object and retuns a json
// var myJSON = JSON.stringify(obj)
// Ajax is a combination of tools using fetch API, using HTTP, using JSON to communicate with servers