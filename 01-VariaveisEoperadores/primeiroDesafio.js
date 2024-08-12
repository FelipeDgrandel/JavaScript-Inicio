/* faca um programa para calcular o valor de uma viagem.
voce tera 3 variaveis. Sendo elas:
1- preco do combustivel;
2- gasto medio de combustivel do carro por KM;
3- distancia em KM da viagem; */

const precoCombustivel = 5.79;
let KmPorLitros = 12;
let distanciaViagemKM = 1580;

let valorViagem = distanciaViagemKM/KmPorLitros*precoCombustivel;

console.log(valorViagem);
