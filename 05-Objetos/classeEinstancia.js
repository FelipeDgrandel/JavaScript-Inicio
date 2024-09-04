
//Classe é uma definição do que deveria ser.
class pessoa{
    nome;
    idade;

    descrever(){
        console.log (`O nome é ${this.nome} e a idade de ${this.idade}`);
    }
}
//E instancia é uma ocorrencia de uma classe
 const renan = new pessoa();
 renan.nome = `Renan`;
 renan.idade = 30
 
 renan.descrever()
 
 const vitor = new pessoa();
 vitor.nome = 'Vitor J Guerra';
 vitor.idade = 25;

console.log ( vitor)
vitor.descrever(); 