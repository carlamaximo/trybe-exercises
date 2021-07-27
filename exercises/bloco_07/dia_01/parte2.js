// Exercício 01
// let fat = 1;

// const fatorial = (num) => {
//   for (let index = 1; index <= num; index += 1) {
//     fat = fat * index;
//   } return fat;
// }

// console.log(fatorial(5));

// Exercício 02
// let maiorPalavra = 0;
// let resultado = '';
// const maior = (frase) => {
//   let palavraArray = frase.split(' ');
//   for (palavra of palavraArray) {
//     if (palavra.length > maiorPalavra) {
//       maiorPalavra = palavra.length;
//       resultado = palavra;
//     }
//   } return resultado;
// }
// console.log(maior('A leticia foi ao Shopping'));

// Exercício 03


// Exercício 04
const palavra = string => {
  let resultado = `Tryber ${string} aqui!`;
  return resultado;
}

console.log(palavra('bebeto'));

const arrayGlobal = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'ArrowFunctions'];
const habilidades = (resultado) => {
  let ordena = arrayGlobal.sort();
  let resultado2 = `${resultado} Minhas 5 principais habilidades são: ${ordena}`;
  return resultado2;
}

console.log(habilidades(palavra('bebeto')));
