// 1. Crie um irmão para elementoOndeVoceEsta .
let pai_01 = document.querySelector('#pai');

let IrmaoDeElementoOndeVoceEsta = document.createElement('div');

pai_01.appendChild(IrmaoDeElementoOndeVoceEsta);

// 2. Crie um filho para elementoOndeVoceEsta .

let ElementoOndeVoceEsta = document.querySelector('#ElementoOndeVoceEsta');

let filhoDeElementoOndeVoceEsta = document.createElement('div');

ElementoOndeVoceEsta.appendChild(filhoDeElementoOndeVoceEsta);

// 3. Crie um filho para primeiroFilhoDoFilho .

let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

let filhoDePrimeiroFilho = document.createElement('div');

primeiroFilhoDoFilho.appendChild(filhoDePrimeiroFilho);

// 4. A partir desse filho criado, acesse terceiroFilho .

document.querySelector('filhoDePrimeiroFilho').children[7];


