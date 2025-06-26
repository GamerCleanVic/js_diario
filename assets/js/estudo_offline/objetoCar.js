function objectCar(){
  let carro = {placa:"ABC-1234", ano: 2013};
  document.write(`Placa do carro: ${carro.placa}<br />`);
  carro.cor = "verde";
  carro.ano = 2012;
  document.write(`Ano do carro: ${carro.ano}<br />`);
  document.write(`Cor do carro: ${carro.cor}`);
}

objectCar();
