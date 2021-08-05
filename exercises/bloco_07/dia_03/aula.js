const assert = require('assert'); // Guardando na variável assert o "chamamento" do módulo assert.

const sum = (num1, num2) => num1 + num2; // arrow Function simples

const expected = sum (1,2); // guardando em expected o chamamento da função sum, com os parametros 1 e 2

assert.strictEqual(expected, 3, 'O teste falhou!'); 

