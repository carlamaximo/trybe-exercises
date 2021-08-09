// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

function acordando () {
  return 'Acordando!!!';
}

function tomarCafe () {
  return 'Bora tomar café!!';
}

function dormir () {
  return 'Partiu dormir!!';
}

const doingThings = (action) => console.log(action());

doingThings(acordando);
doingThings(tomarCafe);
doingThings(dormir);
