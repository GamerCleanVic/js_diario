//Pogramação Funcional: Catch and Finally Fake API
//https://jsonplaceholder.typicode.com/posts

async function clicou(){
    let response = await
    fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert(`Título do 1º post: ${json[0].title}`);
    alert("Clicou!");
    console.log(response.status);
}

document.querySelector("#botao")
.addEventListener('click', clicou);
