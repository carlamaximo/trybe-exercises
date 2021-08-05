const student1 = {
  Html: 'Muito bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
}

const student2 = {
  Html: 'Bom',
  Css: 'ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
}

// console.log(student2['Html']);

const objeto = (student) => {
  // const arraySkills = Object.keys(student);
  for (index in Object.keys(student)) {
    console.log( `Nome da Habilidade: ${Object.keys(student)[index]}, Nível: ${(student)[Object.keys(student)[index]]}.`);
  }
}

console.log(objeto(student1));
console.log(objeto(student2));