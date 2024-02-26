//Aula: Modulo 3
//->JavaScript: Manipulando elementos 2

function clicou(){
    console.log("Clicou no botão");
}

let botao = document.querySelector(".botao");
botao.addEventListener('click', ()=>{
    clicou();
});
