//Metódos de Arrays 2

let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Prato', 'Liquidificador', 'Forma'];

console.log(lista);
lista.push('Jaca');

lista[2] = 'Leite';

let res = lista;
console.log(res);

lista.splice(4, 1);
console.log(res);

res = lista.concat(lista2);
console.log(res);
res.sort();
console.log(res);
res.reverse();
console.log(res);
