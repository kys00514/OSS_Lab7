#!/usr/bin/env node
function arr(array) {
  if (array[i].indexOf("@") != -1) {
    var aaa = array[i];
    var fronta = aaa.split("@");
    var repeata = fronta[0];
    var counta = fronta[1];

    for (let j = 0; j < counta; j++) {
      if (j === 1) array.splice(i + j, 1, repeata);
      else array.splice(i + j, 0, repeata);
    }
  }

  return array;
}
const lib = require("./lib");
if (process.argv.length <= 3) {
  console.log("Insufficient parameter!");
  process.exit(1);
}
let command = process.argv[2];

for (var i = 0; i < process.argv.length; i++) {
  if (process.argv[i].indexOf("@") != -1) {
    var a = process.argv[i];
    var front = a.split("@");
    var repeat = front[0];
    var count = front[1];
    if (count == 0) {
      console.log("Invalid repeat!");
      process.exit(1);
    }
    for (let j = 0; j < count; j++) {
      if (j === 1) process.argv.splice(i + j, 1, repeat);
      else process.argv.splice(i + j, 0, repeat);
    }
  }
}
let numbers = process.argv
  .slice(3, process.argv.length)
  .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
  console.log("Some arguments are not numbers!");
  process.exit(1);
}

let result;
switch (command) {
  case "sum":
    result = lib.sum(numbers);
    break;
  case "avg":
    result = lib.avg(numbers);
    break;
  case "max":
    result = lib.max(numbers);
    break;
  case "min":
    result = lib.min(numbers);
    break;
  case "med":
    result = lib.med(numbers);
    break;

  default:
    console.log("Wrong Command!");
    process.exit(1);
}
console.log(result);
module.exports = {
  arr,
};
