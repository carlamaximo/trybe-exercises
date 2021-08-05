// 1. Escreva a função addOne para passar nos testes já implementados.
const assert = require('assert');

function addOne(myArray){
  let output = [];
  for (num of myArray) {
    output.push(num + 1);
  }
  return output;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// 2. Escreva a função wordLengths para passar nos testes já implementados.

function wordLengths(words) {
  let result = [];
  for (word of words) {
    result.push(word.length);
  }
  return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const output = wordLengths(words);

assert.strictEqual(typeof wordLengths, 'function');
assert.deepStrictEqual(output, expected);

// 3. Escreva a função sumAllNumbers para passar nos testes já implementados.

function sumAllNumbers (numbers) {
  let result = 0;
  for (num of numbers) {
    result += num;
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// 4. Escreva a função findTheNeedle para passar nos testes já implementados.

function findTheNeedle (array, word) {
  let output = -1;
  for (let i = 0; i <= array.length; i ++) {
    if(array[i] === word) {
      output = Number(i);
    }
  }
  return output;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);