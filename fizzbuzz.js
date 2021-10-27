
module.exports = {};
module.exports.fizzBuzz = (num) => {

  if (num % 5 === 0 && num % 3 === 0) {
    return "FizzBuzz"
  }
  else if (num % 5 === 0) {
    return "Buzz"
  }
  else if (num % 3 === 0) {
    return "Fizz"
  }
  else { 
    return num
  }
}


module.exports.createRange = function createRange(min, max){
  var range = [];
  for (let i = min; i <= max; i++) {
      range.push(i);
  }
  return range;
}

//const range = createRange(1, 50);

module.exports.iterate = function iterate(range, callBack){
  for (const element of range) {
    console.log(`Fizzbuzz result for ${element} is ${callBack(element)}`);
  }
}


