//Intervalos
let timer;
function comecar(){
    timer = setInterval(showTime, 1000);
}
function parar(){
    clearInterval(timer);
}


function showTime(){
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    let textao = hora+" : "+minutos+" : "+segundos;

    document.querySelector('.teste1').innerHTML = textao;
}
