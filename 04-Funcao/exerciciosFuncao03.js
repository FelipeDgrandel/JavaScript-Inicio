let precoProdutoEtiqueta = 100.00
let condicaoDePagamento = "pix"
let numeroDeParcelas = 4

function aplicarDesconto(valor,desconto){
    return valor - (valor * (desconto / 100));
};
function aplicarAcrecimo (valor, acrescimo){
    return valor + (valor * (acrescimo / 100));
};

if(condicaoDePagamento == "debito"){
  /*  const total = 0.9 * precoProdutoEtiqueta*/
    console.log('valor do produdo: ' + precoProdutoEtiqueta, "\nForma de Pagamento: " + condicaoDePagamento, '\nvalor Total: '+ aplicarDesconto(precoProdutoEtiqueta, 10));
} else if (condicaoDePagamento == "dinheiro" || condicaoDePagamento == "pix") {
   /* const total = 0.85 * precoProdutoEtiqueta*/
    console.log('valor do produto: ' + precoProdutoEtiqueta, '\nForma de Pagamento: '+ condicaoDePagamento, '\nValor Total: '+ aplicarDesconto(precoProdutoEtiqueta, 15));
} else if (condicaoDePagamento == 'credito' && numeroDeParcelas <= 2 ){
    console.log('Valor do produto: ' + precoProdutoEtiqueta, '\nForma de Pagamento: '+ condicaoDePagamento, '\nTotal de Parcelas: '+ numeroDeParcelas, 'Valor Total: '+ precoProdutoEtiqueta);
} else if (condicaoDePagamento == 'credito' && numeroDeParcelas > 2){
  /*  const total = 1.10 * precoProdutoEtiqueta*/
    console.log('Valor do produto: ' + precoProdutoEtiqueta, '\nForma de Pagamento: '+ condicaoDePagamento, '\nTotal de Parcelas: '+ numeroDeParcelas, 'Valor Total: '+ aplicarAcrecimo(precoProdutoEtiqueta, 10));
}


 
/*function aplicarDesconto(debito){
    if (debito == 'debito'){
       return (0.9*precoProdutoEtiqueta);
    }
}
function descontoDinheiro(dinheiro,pix){
    if (dinheiro == dinheiro || dinheiro == pix){
     return (0.85*precoProdutoEtiqueta);
    }
}
function acrescimo(credito){
    if(credito == credito){
        return (1.10* precoProdutoEtiqueta);
    }
}*/