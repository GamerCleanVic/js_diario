//Próxima Aula: Modulo 4
//->JavaScript: 19 - Funcional: Instância e This

function createPerson(name, lastName, age){
    return{
        name,
        lastName,
        age
    }
}

let p1Fora = createPerson('Bonieky', 'Lacerda', 18);
let p2Fora = createPerson('Junior', 'Fulano', 20);

console.log(p1Fora.name);
