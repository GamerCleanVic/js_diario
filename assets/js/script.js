//Aula: Modulo 3
//->JavaScript: Manipulando elementos 2

function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    ul.children[0].innerHTML = "Item <b>alterado</b>";
    console.log(ul.outerHTML);
}
