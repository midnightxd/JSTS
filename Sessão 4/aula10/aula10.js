// Aula 10 funções construtoras (constructor functions) retorn objetos (;)
// factory finctions Ex:    criaPessoa (,)
// constructor functions Pessoa (new)
// scopo de uma função construtora é um "Objeto"

(function () {
    //Function create ID
    function createID (min = 100000, max = 999999) {
        const rand = Math.random() * (max - min) + min;
        return rand.toFixed(0);
    }
    //Fcuntion create person
    function Person (name, surname) {
        //Atributos ou metodos privados
        const id = createID();

        //Atributos ou metodos publicos
        this.name = name;
        this.surname = surname;
        this.msg = `${name} ${surname} seu ID é ${id}`;
        //
        this.method = function () {
        //
        };
    }
    //Function visualizar pessoa
    function viewPerson () {
        const person = new Person('Leonardi', 'Melo');
        console.log(person.msg);
    }
    viewPerson();
})();
