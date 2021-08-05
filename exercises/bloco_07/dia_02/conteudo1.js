const obj = (objeto, chave, valor) => {
  objeto = Object.create(chave, valor);
}
console.log(obj('customer', 'nome', 'Carla'));

// const obj = {
//   nome: 'Carla',
//   endereço: 'Joinville',
//   idade: 24,
//   linguagem: 'JavaScript',
// }
// console.table(obj);
// obj.mae = 'Sonia';
// console.table(Object.keys(obj));
