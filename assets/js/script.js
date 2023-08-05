//Eventos clique2
function clicou(){
    const teste = document.querySelector("#teste1");
    const ul = teste1.querySelector('ul');

    let newUl = document.createElement('ul');
    for(let i = 1; i <= 5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add";
        newUl.append(newLi);
    }

    ul.after(newUl);
}

/*
->3 períodos -> JavaScript Vanilla velocidade 2x
->De manhã até de tarde Node (NodeJS + SQL + Express) + React.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Next.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Vue.
->De manhã até de tarde Node (NodeJS + SQL + Express) + Angular.
*/

