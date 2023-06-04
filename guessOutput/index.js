function addon(x){
  return function(y){
   return x + y;
  }
 }
 console.log(addon(1));
 console.log(addon(1)(2));
 
 
 var employeeDetailsOriginal = {name:'Manjula',age:25,Profession: 'Software Engineer'};
 var employeeDetailsDuplicate = employeeDetailsOriginal;
 employeeDetailsDuplicate.name = 'NameChanged'
 console.log(employeeDetailsOriginal );
 console.log(employeeDetailsDuplicate );
 
 const arr1 = [3,4,5,0,1,2];
 const arr2 = [3,4,5];
 arr1 = [...arr1,...arr2];
 console.log(arr1)
 
 var greeting = "say hi";
 if(true){
  var greeting = "say Hello instead";
  console.log(greeting);
 }
 console.log(greeting);
 