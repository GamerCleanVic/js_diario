function somar(x, y){
    return `${x} + ${y} = ${x + y}`;
}
console.log(somar(2, 5));

let multi = function(x, y){
    return `${x} + ${y} = ${x * y}`;
};
console.log(multi(3, 7));

let divd = (x, y) =>  `${x} + ${y} = ${x / y}`;
console.log(divd(8, 4));

let letrasNome = nome => `O nome ${nome} tem ${nome.length} letras`;
console.log(letrasNome('Jotta'));
