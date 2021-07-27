// let ifScope;
// let elseScope;

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// console.log(`Os números ${oddsAndEvens.sort((a,b) => a - b)} se encontram de forma crescente.`)
 const sortedArray = (oddsAndEvens.sort((a, b) => a - b));

console.log(sortedArray); // será necessário alterar essa linha 