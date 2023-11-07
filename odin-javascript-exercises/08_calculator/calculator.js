const add = function(x, y) {
	return (x+y);
};

const subtract = function(x, y) {
	return (x-y);
};

const sum = function(array) {
  let result = array.reduce((sum, current) => sum + current);
  return result
};

const multiply = function(array) {
  let result = array.reduce((sum, current) => sum * current);
  return result
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
  if (x==0) return 1;
	if(x!=1){
    return x*factorial(x-1);
  } else {
    return 1;
  }
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
