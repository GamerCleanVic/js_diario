//Próxima Aula: Modulo 3
//JavaScript aula : Eventos de teclado 1

function clicou(){
  const button = document.querySelector('button');

  if(button.classList.contains('verde')){
    button.classList.remove('verde');
    button.classList.add('azul');
  }else{
    button.classList.remove('azul');
    button.classList.add('verde');
  }
  button.classList.toggle('yellow');
  console.log(button.classList);
}
