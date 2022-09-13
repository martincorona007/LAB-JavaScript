const animals = ['dog','cat','cow','horse','mouse'];
//=======================================
for(let i = 0; i < animals.length; i++){
  console.log(animals[i].toUpperCase());
}
//=======================================
let j = 0;
while(j < animals.length){
    console.log(animals[j].toUpperCase());
    j++;
}
//=======================================
animals.forEach(el => {
  console.log(el.toUpperCase());
});
//=======================================
const newAnimals = animals.map(el => {
  const animalUpperCase = el.toUpperCase();
  console.log(animalUpperCase);
  return animalUpperCase;
})
//=======================================
let k = 0;
do {
  console.log(animals[k].toUpperCase())
  k++;
}while(k < animals.length)
//=======================================
for(const it of animals){
  console.log(it.toUpperCase());
}
//=======================================
const animals1 = {
  1: 'dog',
  2: 'cat',
  3: 'cow',
  4: 'horse',
  5: 'mouse',
}
for( const key in animals){
  console.log(animals[key].toUpperCase());
}