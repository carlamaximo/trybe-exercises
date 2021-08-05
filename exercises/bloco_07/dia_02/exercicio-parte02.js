const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (object, key, value) => {
  object[key] = value; 
  console.log(object);
}

addTurno(lesson2, 'turno', 'manhã');

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaKeys = (object) => {
  console.log(Object.keys(object));
}

listaKeys(lesson2);

// 3. Crie uma função para mostrar o tamanho de um objeto.

const mostraTamanho = (object) => {
  console.log(Object.keys(object).length);
}

mostraTamanho(lesson2);

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listaValores = (object) => {
  return(Object.values(object));
}

listaValores(lesson2);

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons).

const alllessons = Object.assign({}, {lesson1, lesson2, lesson3});

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numeroAlunos = () => {
  return (`${lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes}`)
}

numeroAlunos();

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const chaveValor = (object, num) => {
  console.log(`${Object.keys(object)[num]}`);
}

chaveValor(lesson3, 2);

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

// const verificar = (object, key, value) => {
//   // if (Object.entries(object) === [key, value]) {
//   //   return true;
//   // }
//   if (Object.entries(object).includes([key, value])) {
//     console.log (true);
//   } else {
//     console.log (false);
//   }
// }

verificar(lesson3, 'turno', 'manha');

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) 
    isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
