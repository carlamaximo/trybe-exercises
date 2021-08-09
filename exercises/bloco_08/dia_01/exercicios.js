// 1. Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const people = (nome) => {
  const email = nome.split(' ').join('_')
  return {nome, email:`${email}@trybe.com.br`}
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

// console.log(newEmployees(people));

// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkNum = () => ((Math.random() * 5) + 1).toFixed(0);

const sorteio = (num, action) => (action() === num) ? 'Parabens!':'Tente novamente!';

// console.log(sorteio(5, checkNum));

// 3. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const checkRespostas = (gabarito, respostas) => {
  let soma = 0;
  for (let i = 0; i < respostas.length; i++) {
    //for (item in gabarito) {
      if (respostas[i] === gabarito[i]) {
        soma ++;
      }
    //}
  }
  return soma;s
}

console.log(checkRespostas(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']));

// const prova = (gabarito, respostas, checkRespostas) => {

// }
  