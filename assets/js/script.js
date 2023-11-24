class Person{
    steps = 0;
    age = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    takeAStep(){
        this.steps++;
    }

    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }else{
            console.log("Idade não aceita, só númeors!");
        }
    }
}

let p1 = new Person("Jõao");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.setAge('dfgdfgfd');
console.log(`${p1.name} tem ${p1.age} anos`);
