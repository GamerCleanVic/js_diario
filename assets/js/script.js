//Pogramação Funcional: Catch and Finally Fake API
//https://jsonplaceholder.typicode.com/posts

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response.status);
        return response.json();
    })
    .then((json) => {
        alert(`Título do 1º post: ${json[0].title}`);
    })
    .catch(() => {
        alert("Opa, deu algo errado!");
    })
    .finally(() => {
        alert("Terminou!");
    })
}

function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo teste',
            userId: 2
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(response.status);
            console.log(json);
        })
    })
}

document.querySelector("#botao")
.addEventListener('click', clicou);

document.querySelector('#inserir')
.addEventListener('click', inserir);
