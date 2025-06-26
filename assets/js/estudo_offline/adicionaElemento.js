function adicionar(){
  var texto = document.getElementById("texto").value;
  var para = document.createElement("p");
  para.id = 'mensagem';
  para.innerHTML = `<b>${texto}</b>`;
  var corpo = document.getElementById("corpo");
  corpo.appendChild(para);

  console.log(para);

  const mensagem = document.getElementById("mensagem");
  mensagem.addEventListener('animationend', () => {
    mensagem.remove();
  });
}
