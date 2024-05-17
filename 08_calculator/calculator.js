const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let total = arr.reduce((accumulator, item) => accumulator + item, 0);
  return total;
};

const multiply = function(arr) {
  return arr.reduce((accumulator, item) => accumulator * item);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	let result = 1;
  for (i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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
