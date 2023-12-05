class Person{
    age = 0;

    constructor(name){
        this.name = name;
    }
}
function createPerson(name, age){
    p = new Person(name);
    p.age = age;
    return p;
}
let p1 = new createPerson("João", 21);
console.log(`${p1.name} tem ${p1.age} anos.`);
