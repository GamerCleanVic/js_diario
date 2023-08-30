//Metódos de Numbers

let num1 = 10;

let res = num1;
console.log(res,`${typeof res}`);

res = num1.toString();
console.log(res,`${typeof res}`);

res = parseInt(num1) + 2;
console.log(res,`${typeof res}`);

num1 = '11.4353535345';
res = parseFloat(num1);
res = res.toFixed(2);
console.log(res,`${typeof res}`);
