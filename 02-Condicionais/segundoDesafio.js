/* faca um programa para calcular o valor de uma viagem.
voce tera 5 variaveis. Sendo elas:
1- preco do etanol ;
2- preco do gasolina ;
3- tipo de combustivel que esta no carro;
4- gasto medio de combustivel do carro por KM;
5- distancia em KM da viagem;
imprimir o no console .*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoDeCombustivel = "etanol"
const consumoMedioKm = 10;
const distanciaViagemKM = 350;

if (tipoDeCombustivel == "gasolina") {
    var totalValor = (distanciaViagemKM / consumoMedioKm) * precoGasolina;
    console.log("O valor gasto para realizar a viagem é de ", + totalValor);
} else if (tipoDeCombustivel == "etanol") {
    var totalValor = (distanciaViagemKM / consumoMedioKm) * precoEtanol;
    console.log("O valor da viagem com Etanol é ", + totalValor);

}
