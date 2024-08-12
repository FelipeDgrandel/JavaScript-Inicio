/*2) O IMC - Indice de massa corpora é um criterio da  Organizaçao Mundial da suade para uma indicaçao sobre a condicao de peso de uma pessoa adutal.

= elabore um algoritimo que dado o peso e a altura de uma adulto mostre sua condiçao de acordo com  a tabela abaixo.
Formula do IMC:
IMC = peso / (altura * altura);
IMC em adultos Condições:
- abaixo de 18.5: abaixo do peso;
- Entre 18.5 e 25: peso normal;
- entre 25 e 30: Acima do peso;
- entre 30 e 40: obeso;
- acima de 40: Obessidade Grave;
*/

const altura = 1.69;
const peso = 190;
const IMC = peso / (altura*altura);
    

if (IMC < 18.5){
    console.log("O valor IMC é: "+ IMC, " e voce esta Abaixo do peso." );
} else if (IMC >= 18.5 && IMC <= 25){
    console.log ("O valor do IMC é: " +IMC, " e voce esta Com Penso normal.");
} else if(IMC >= 26 && IMC <=30){
    console.log ("O valor do IMC é:"+ IMC, " e esta Acima do peso.");
} else if (IMC >= 31 && IMC <= 50){
    console.log("Com o IMC de: " + IMC, " esta Obeso.");
} else {
    console.log(" IMC: " + IMC, "Obesideda Grave.");
}