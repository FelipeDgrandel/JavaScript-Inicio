/*
1) Faça uma algoririmo que dado as 3 notas tiradas por um alino em um semestre da faculdade calcule e impreima a sua media e a suas classifiçao conforme a tabela abaixo
Média = (nota 1 + nota 2 + nota 3) / 3;

Classificaçao:
- media menor que 5, reprovado;
- media entre 5 e 7, recuperaçao;
- media acima de 7, aprovado para o proximo semestre; */
const nota01 = 5;
const nota02 = 5;
const nota03 = 4;

const media = (nota01 + nota02 + nota03) / 3;
 
if (media < 5){
    console.log("Resultado da nota geral: ", media ,` "REPROVADO" `);
} else if (media >= 5 && media < 7){
    console.log ("Resultado da nota geral: ", media ,` "RECUPERAÇÃO" `);
} else if (media >= 7 ){
    console.log("Resultado da nota geral: ", media ,` "APROVADO" `);
} else {
    console.log ("Valor Invalido");
}