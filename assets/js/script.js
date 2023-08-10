//Exercício1: add UL por 1 input text
const input = document.querySelector('input');
const lista = document.querySelector('ul');

function handleKeyUp(e){
    if(e.key === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        lista.appendChild(newLi);

        input.value = '';
    }
}

input.addEventListener('keyup', handleKeyUp);


/*
->3 períodos -> JavaScript Vanilla velocidade 2x
->De manhã até de tarde Node (NodeJS + SQL + Express) + React.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Next.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Vue.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Angular.
*/

