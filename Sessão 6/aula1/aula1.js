// Aula 1 Revisando objetos
// notação de ponto (objeto.propriedade)

(() => {
    //Object
    const person = {
        name: 'Leonardi',
        surname: 'Melo',
        age: 18,
        get speakName () {
            return `${this.name} ${this.surname} está falando oi`;
        },
        get datanascimento () {
            const dataAtual = new Date();
            return dataAtual.getFullYear() - this.age;
        },
    }
    for (let key in person) {
        console.log(key)
    }
    //console.log(person.datanascimento);
});

(() => {
    //Factory function
    createPerson = (name, surname, age) => {
        return {
            //Atributos
            name: name,
            surname: surname,
            age: age,
            //Metodos
            get fullName () {
                return `${this.name} ${this.surname}`;
            },
        }
    }
    const pessoa1 = createPerson('Leonardi', 'Melo', 18);
    console.log(pessoa1.fullName);
});

//Constructor function
(() => {
    //Create person
    function Person (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        //Congela o objeto
        Object.freeze(this);
    }
    // Set static person
    const person = new Person('Leonardi', 'Melo', 18);
    console.log(person);
})();
