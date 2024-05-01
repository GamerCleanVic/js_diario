//Aula: Modulo 3
//->JavaScript: Manipulando CSS

function clicou(){
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao2');

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar senha';
    }else{
        input.setAttribute('type', 'text');
        botao.innerText = 'Ocultar senha';
    }
}
