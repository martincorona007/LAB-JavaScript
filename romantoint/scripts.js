/**
 * @param {string} s
 * @return {number}
 */
 function getNumber(num){
  switch(num){
      case 'I': return 1;
          break;
      case 'V': return 5;
          break;
      case 'X': return 10;
          break;
      case 'L': return 50;
          break;
      case 'C': return 100;
          break;
      case 'D': return 500;
          break;
      case 'M': return 1000;
          break;
  }
}
var romanToInt = function(s) {
let number = 0;
let lastNumber = 0;
let currentNumber = 0;
let iterator = 0;
for(iterator; iterator < s.length;iterator++){
  console.log("1 => "+s.charAt(iterator)+" "+s.charAt(iterator+1));
  console.log("2 => "+getNumber(s.charAt(iterator))+" "+getNumber(s.charAt(iterator+1)));
  if(getNumber(s.charAt(iterator)) < getNumber(s.charAt(iterator+1))){
      console.log("sub");
      console.log("B it "+iterator);
      number += getNumber(s.charAt(iterator+1)) - getNumber(s.charAt(iterator))
      iterator++;
      console.log("A it "+iterator);
      
  }else{
      number += getNumber(s.charAt(iterator)) 
      console.log("norm");
  }
  //number +=getNumber(s.charAt(i)) : number += getNumber(s.charAt(i)) - getNumber(s.charAt(i+1)) 
  //if(i === 0){
    //  number = getNumber(s.charAt(i));
  //}
//   if( i !== 0){
     // lastNumber = getNumber(s.charAt(i-1));
     // currentNumber = getNumber(s.charAt(i));
     // (lastNumber >= currentNumber)? number += currentNumber: number += (lastNumber - currentNumber)*-1;
//  }
// console.log("LN "+lastNumber);
//   console.log("CR "+currentNumber);
  console.log("---");
  
   //number += getNumber(s.charAt(i));
  console.log("NUM "+number);
} 
// console.log("OUT"+number);
return number;
};