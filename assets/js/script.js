//Mostrar teclas apertadas
function soltou(e){
    console.log('TECLA APERTADA '+e.code);
    console.log('SHIFT? '+e.shiftKey);
    console.log('CTRL? '+e.ctrlKey);
    console.log('ALT? '+e.altKey);
    console.log('--');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

/*
->3 períodos -> JavaScript Vanilla velocidade 2x
->De manhã até de tarde Node (NodeJS + SQL + Express) + React.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Next.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Vue.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Angular.
*/

