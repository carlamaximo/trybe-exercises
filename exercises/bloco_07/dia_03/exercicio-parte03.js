// 1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

// const greetPeople = (people) => {
//   const greeting = [];

//   for (person in people) {
//     greeting.push(`Hello ${people[person]}`);
//   }
//   return greeting;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.strictEqual(typeof greetPeople, 'function');
// assert.ok(greetPeople(parameter), result);

// 2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const removeVowels = (word) => {
//   const characters = word.split('');
//   let num = 0;
//   const results = [];

//   for (let index = 0; index < characters.length; index += 1) {
//     if (
//       characters[index] === 'a' ||
//       characters[index] === 'o' ||
//       characters[index] === 'i' ||
//       characters[index] === 'e' ||
//       characters[index] === 'u'
//     ) {
//       num ++;
//       results.push(num)
//     } else {
//       results.push(characters[index]);
//     }
//   }
//   return results.join('');
// };


// const parameter = 'Dayane';
// const result = 'D1y2n3';

// assert.ok(typeof removeVowels, 'function');
// assert.ok(removeVowels(parameter), result);

// 3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const greaterThanTen = (array) => {
//   let results = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] > 10) {
//       results.push(array[index]);
//     }
//   }
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21];
// const result = [32, 21];

// assert.ok(typeof greaterThanTen, 'function');
// assert.ok(greaterThanTen(parameter), result);

// 4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.ok(typeof secondThirdSmallest, 'function');
assert.ok(secondThirdSmallest(parameter), result);