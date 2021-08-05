let soma = 0;
let resultado = 0;
const average = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number' || (array.length === 0)) {
      return undefined;
    } 
  }
  for (let index = 0; index < array.length; index += 1) {
    let numero = parseInt(array[index], 10);
    soma += numero;
    resultado = soma / array.length;
  } return resultado;
};

console.log(average([0, 0, 0, 0, 0, 0, 0]));