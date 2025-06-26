function Carro(ano, placa){
  this.ano = ano;
  this.placa = placa;
  var nCor = Math.random() * Carros.cores.length;
  this.cor = Carro.cores[Math.floor(nCor)];
  this.alterarAno = function(novoAno){//método
    this.ano = novoAno;
  };
}

Carro.cores = ["Azul", "Branco", "Vermelho"];
Carro.adicionarCor = function(novaCor){ //método estático
  Carro.cores.push(novaCor);
}
Carro.adicionarCor("Verde");

document.write(Carro.cores[0]+"<br />");
document.write(Carro.cores[3]);
