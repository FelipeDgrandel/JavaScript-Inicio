// objeto no java script é uma coleção de Dinamica de chaves e valores
// Dinamica é que podemos incrementar e remover

const vitor = {
    nome: 'vitor j lutador',
    idade: 25
};
console.log(vitor.nome);
console.log (vitor.idade);
console.log(vitor)

//como incrementar.
vitor.altura = 1.70;

//como deletar
delete vitor.nome;

console.log(vitor)

//funções dentro de Objetos são chamado de metodos
//criando um metodo

const pessoa = {
    nome: 'Felipe F Veiga',
    idade: 24,
    altura: 1.73,
   
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)

    }
};

//sobre escrever o objeto
pessoa.nome = 'José';
pessoa.idade = 29

//sobreEscrever a função
pessoa.descrever = function(){
    console.log(`O meu nome é ${this.nome}`);
};
 pessoa.descrever()