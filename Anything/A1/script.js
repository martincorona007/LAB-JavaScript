// == skip values in array destructuring
// const colors = [
//   'red',
//   'yellow',
//   'green',
//   'blue',
//   'brown',
// ]
// const [,,,,...remaining] = colors;
// console.log(remaining)
// == nested arrays
let nestedArray = [
  [1,2],
  [3,4,5],
  [6,7,8,9]
];
let newArray = nestedArray.flat();
console.log(newArray)