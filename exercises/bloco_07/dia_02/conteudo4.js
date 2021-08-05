const countries = {
  França: 'Paris',
  Brasil: 'Brasília',
  Rússia: 'Moscou',
}

console.log(Object.entries(countries));

for(index in Object.entries(countries)) {
  console.log('--------');
  console.log('País:', Object.entries(countries)[index][0]);
  console.log('Capital:', Object.entries(countries)[index][1]);
  console.log(index);
};