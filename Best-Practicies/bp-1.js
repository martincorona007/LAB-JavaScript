// · Replace loops with higher-order functions
const groceries = [
  {
    name: 'Face Masks',
    price: 17.50,
  },
  {
    name: 'Disinfecting Wipes',
    price: 24.99,
  },
  {
    name: 'Goggles',
    price: 8.99,
  },
  {
    name: 'Gloves',
    price: 25.99,
  },
  {
    name: 'Hand Sanitizers',
    price: 24.99,
  },
];

let index = 0;
while (index < groceries.length) {
  console.log(groceries[index].name);
  index = index + 1;
}

groceries.forEach((item) => {
  console.log(item.name);
});
// Before:
let index = 0;
const prices = [];while (index < groceries.length) {
  prices.push(groceries[index].price);
  index = index + 1;
}// After:
groceries.map((item) => {
  return item.price;
});

// Before:
let index = 0;
let total = 0;
while (index < groceries.length) {
  total = total + groceries[index].price;
  index = index + 1;
}
// After:
groceries.reduce((sum, item) => {
  return sum += item.price;
}, 0);
// · Replace conditionals with data structures and polymorphism
//no
const discount = (amount, code) => {
  switch (code) {
    case 'DIJFNC':
      return amount * 0.80;
    case 'XPFJVM':
      return amount * 0.75;
    case 'FJDPCX':
      return amount * 0.50;
  }
};
//yes
const DISCOUNT_MULTIPLIER = {
  'DIJFNC': 0.80,
  'XPFJVM': 0.75,
  'FJDPCX': 0.50,
};
const discount = (amount, code) => {
  return amount * DISCOUNT_MULTIPLIER[code];
};
// · Replace literal variable names with purposeful variable names
//no
const arr = [
  'Breakfast Cereal',
  'Candy and Snack',
  'Dairy',
  'Paper Products and Cleaning Supplies',
];
const func = (n) => {
  const i = arr.findIndex(i => i === n);
  console.log(i);
};
func('Dairy');
//yes
const aisles = [
  'Breakfast Cereal',
  'Candy and Snack',
  'Dairy',
  'Paper Products and Cleaning Supplies',
];
const printAisleNumber = (name) => {
  const number = aisles.findIndex((aisleName) => {
    return aisleName === name;
  });  
  console.log(number);
};
printAisleNumber('Dairy');
// Forget global scope exists
//Treat every function, object, and class as a new universe.