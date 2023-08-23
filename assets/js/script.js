//Pogramação Funcional: Herança

const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Jotta',
    email: 'emailteste@contato.com'
}

let admin1 = {
    name: 'CEO1',
    email: 'qualqueradmin@teste.com',
    level: 2
}

console.log(user1, admin1);
