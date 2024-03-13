const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(array) {
	let output = 0
  if (array.length == 0) return 0
  for (let i=0; i < array.length; i++){
    output += array[i]
  }
  return output
};

const multiply = function(array) {
  let output = 1
  for (let i=0; i < array.length; i++){
    output *= array[i]
  }
  return output
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
	let snum = 1
  for (let i=1; i<=num; i++){
    snum *= i
  }
  return snum
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
