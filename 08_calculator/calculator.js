const add = function(a,b) {
	return (a + b);
};

const subtract = function(a,b) {
	return (a - b);
};

const sum = function(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
return sumWithInitial;
};

const multiply = function(arrayo) {
  const initialValue = 1;
  const sumWithInitial = arrayo.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    initialValue
);
return sumWithInitial;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(foo) {
 let aryay = [];
 for (let i = foo; i > 1; i--) {
  aryay.push(i);
 }
 let initial = 1;
return aryay.reduce(
  (acc,val) => acc * val, initial
  )
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
