// function division(x, y) {
//   return x / y;
// }

// const assert = require('assert');

// // declaração da função division, definida anteriormente...

// assert.strictEqual(division(10, 2), 5); // OK
// assert.strictEqual(division(10, 0), 0); // 💣

// const assert = require('assert');

// function division(x, y) {
//   if (y === 0) throw new Error ('parameter y must not be 0');
//   // Queremos que o código retorne um erro com uma mensagem específica
//   // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
//   // for verdadeira, o que irá interromper a execução da função.

//   return x / y;
// }

// // declaração da função division, definida anteriormente...

// assert.strictEqual(division(10, 2), 5); // OK
// assert.strictEqual(division(10, 0), 0); // 💣

// Testando o TDD

const assert = require('assert');

const myFunction = () => {};

assert.strictEqual(typeof myFunction, 'function');