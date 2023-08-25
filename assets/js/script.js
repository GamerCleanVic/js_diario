//Pogramação Funcional: Catch and Finally Fake API
//https://jsonplaceholder.typicode.com/posts

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
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

document.querySelector("#botao")
.addEventListener('click', clicou);
