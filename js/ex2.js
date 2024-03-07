const numbers = Array.from({length: 10}, (_, i) => i + 1)

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);

const divisible2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Divisible by 2 or 5:", divisible2or5);

const divisible3 = numbers.filter(num => num % (3 * 3) === 0);
console.log("Divisible by 3:", divisible3);

const sum5 = numbers
  .filter(num => num % 5 === 0)
  .map(num => num ** 2)
  .reduce((acc, current) => acc + current, 0);
console.log("Sum of square numbers divisible by 5:", sum5);