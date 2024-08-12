
/*function quadrado(valor){

  return valor*valor;
}
const resultadoDez = quadrado(10);
console.log(resultadoDez);
*/

function incrementarJuros (valor, porcetagemDeJuros){
     const valorDeAcrecimo = (porcetagemDeJuros/100)*valor;
    return valor + valorDeAcrecimo;
 }
 console.log(incrementarJuros(200,12));
 console.log(incrementarJuros(50, 8));
 console.log(incrementarJuros(1329,10));