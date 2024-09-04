const pessoa = {
    nome : 'Felipe Ferreira',
    idade: 24,
    altura: 1.73,
    descrever: function() {
        console.log( `O meu nome é ${this.nome} e minha idade é ${this.idade}` )
    }
};

pessoa.descrever()
pessoa.nome = 'Renan';
pessoa.altura = 1.9
 pessoa.descrever()