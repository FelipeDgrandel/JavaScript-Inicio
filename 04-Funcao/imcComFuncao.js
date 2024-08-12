function main() {
const altura = 1.73;
const peso = 70;

const imc = calcularImc(peso, altura);
console.log(clasificarImc(imc));
} 
function calcularImc(peso, altura){
    return (peso / Math.pow(altura,2)).toFixed(2);
}
function clasificarImc(imc){
    if (imc < 18.5){
        return "O valor IMC é: "+ imc + " e voce esta Abaixo do peso.";
    } else if (imc >= 18.5 && imc <= 25){
        return "O valor do IMC é: " + imc + " e voce esta Com Penso normal.";
    } else if(imc >= 26 && imc <=30){
        return "O valor do IMC é:"+ imc + " e esta Acima do peso.";
    } else if (imc >= 31 && imc <= 50){
        return "Com o IMC de: " + imc + " esta Obeso.";
    } else {
        return " IMC: " + imc + "Obesideda Grave.";
    }

}


main();