/*
    array usa []
    objeto usa {}
*/

// Objeto literal
/*
const pessoa = {
    nome: `Leonardi`,
    sobrenome: `Melo`,
    idade: 18
}
*/

// Chamamos essa função de factory
/*
                    //Parametros
function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome ,idade }
}
const pessoa = criaPessoa(`Leonardi`, `Melo`, 18);
console.log(pessoa.nome);
*/

const pessoa_ = {
    nome: 'Leonardi',
    sobrenome: 'Melo',
    idade: 18,

    fala () {
        console.log(`A minha idade é: ${this.idade}`);
    },
    addIdade () {
        ++this.idade;
    }
};

pessoa_.fala();
pessoa_.addIdade();
pessoa_.fala();
