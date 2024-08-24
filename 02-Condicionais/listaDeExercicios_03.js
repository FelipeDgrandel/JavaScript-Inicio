/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto,considerando o preço normal de etiqueta e a escolha da condiçao de pagamento.
- Utilize os codigos da tabela a seguir para ler qual a condicao de pagamento escolhida e efetuar a calculo adequado.
Codigo Condição de pagamento:
- A vista Debito, recebe 10% de desconto;
- A vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros:
- Acima de duas vezes, preço normal de etiqueta mais juros de 10 %;
*/ 
let precoProdutoEtiqueta = 120.00
let condicaoDePagamento = "credito"
let numeroDeParcelas = 4

if(condicaoDePagamento == "debito"){
    const total = 0.9 * precoProdutoEtiqueta
    console.log('valor do produdo: ' + precoProdutoEtiqueta, "\nForma de Pagamento: " + condicaoDePagamento, '\nvalor Total: '+ total);
} else if (condicaoDePagamento == "dinheiro" || condicaoDePagamento == "pix") {
    const total = 0.85 * precoProdutoEtiqueta
    console.log('valor do produto: ' + precoProdutoEtiqueta, '\nForma de Pagamento: '+ condicaoDePagamento, '\nValor Total: '+ total);
} else if (condicaoDePagamento == 'credito' && numeroDeParcelas <= 2 ){
    console.log('Valor do produto: ' + precoProdutoEtiqueta, '\nForma de Pagamento: '+ condicaoDePagamento, '\nTotal de Parcelas: '+ numeroDeParcelas, 'Valor Total: '+ precoProdutoEtiqueta);
} else if (condicaoDePagamento == 'credito' && numeroDeParcelas > 2){
    const total = 1.10 * precoProdutoEtiqueta
    console.log('Valor do produto: ' + precoProdutoEtiqueta, '\nForma de Pagamento: '+ condicaoDePagamento, '\nTotal de Parcelas: '+ numeroDeParcelas, 'Valor Total: '+ total)
}
