function verificar() {
  try {
    var x = document.getElementById("valor").value;
    if (x == "") throw "Campo vazio";
    if (isNaN(x)) throw "Não é um número válido";
    if (x > 10) throw "Alto de mais";
    if (x < 5) throw "Baixo demais";
    document.getElementById("mesg").innerHTML = "Número aceito!";
  } catch (err) {
    var y = document.getElementById("mesg");
    y.innerHTML = "Erro: "+err+".";
  }
}
