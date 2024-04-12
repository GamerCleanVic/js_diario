//Aula: Modulo 3
//->JavaScript: Manipulando elementos 2

function clicou(){
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector('ul');

    ul.outerHTML = "<b><ul><li>UL alterada Teste</li></ul></b>";
}
