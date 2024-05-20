//Aula: Modulo 3
//->JavaScript: O q é POO

class Person{
    age = 0;
    steps = 0;

    constructor(name){
        this.name = name;
    }
    takeAStep(){
        this.steps++;
    }
    setAge(newAge){
        this.age = newAge;
    }
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.setAge(10);

console.log(`${p1.name} tem ${p1.age} anos.`);
