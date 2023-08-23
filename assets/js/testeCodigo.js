//POO: Herança
class Person{
    age = 0;

    constructor(name){
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz: oi!`);
    }
}

class Student extends Person{
    constructor(name, id){
        super(name);
        this.id = id;
    }

    sayHi(){
        console.log(`${this.name} diz agora: olá!`);
    }
}

let p1 = new Student("Jotta", 1);

console.log(`${p1.name} tem ${p1.age} e matrícula #${p1.id}`);
p1.sayHi();
