//Intervalos
let timer;
function rodar(){
    timer = setTimeout(function(){
        document.querySelector('.teste1').innerHTML = 'Rodou!';
    }, 2000);
}

function parar(){
    clearTimeout(timer);
}
