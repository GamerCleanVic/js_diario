//Eventos clique2
function clicou(){
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    if (input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao.innerText = "Mostrar Senha";
    }else{
        input.setAttribute('type', 'text');
        botao.innerText = "Ocultar Senha";
    }
}

/*
->3 períodos -> JavaScript Vanilla velocidade 2x
->De manhã até de tarde Node (NodeJS + SQL + Express) + React.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Next.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Vue.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Angular.
*/

