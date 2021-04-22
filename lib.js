function sum(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
  return sum(numbers) / numbers.length;
}
function max(numbers) {
  return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}
function min(numbers) {
  return numbers.reduce((min, curr) => (min < curr ? min : curr), numbers[0]);
}

function med(numbers) {
  let array = numbers.sort();
  if (numbers.length % 2 == 1) return array[(numbers.length - 1) / 2];
  if (numbers.length % 2 == 0)
    return (array[numbers.length / 2] + array[numbers.length / 2 - 1]) / 2;
}

module.exports = {
  sum,
  avg,
  max,
  min,
  med,
};
