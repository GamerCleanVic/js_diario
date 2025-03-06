//Próxima Aula: Modulo 5
//JavaScript Módulo 2: Iteração de array 1

let cars = [
    { brand: "Fiat", year: 2022 },
    { brand: "Bmw", year: 2018 },
    { brand: "Ferrari", year: 2020}
];

cars.sort((a, b) => a.year - b.year);

console.log(cars);
