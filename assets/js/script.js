//Próxima Aula: Modulo 4
//JavaScript: 19 - Funcional: Herança

let person = {
    name: 'Bonieky',
    lastName: 'Lacerda',
    age: 18,
    getFullName(){
        return `${this.name} ${this.lastName}`;
    },
    start(){
        console.log('Deu start na pessoa!');
    }
}

person.start();
console.log(person.getFullName());
