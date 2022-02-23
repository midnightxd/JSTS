/*
 * JavaScript baseado em protótipos para passar propriedades e metódos de
 * um objeto para o outro.
 *
 * Definição de protótipo
 * Protótipo é o termo usado para se referir ao que foi criado pela primeira
 * vez, servindo de modelo ou molde para futuras produções.
 *
 * Todos os objetos tem uma referência interna para um protótipo (__proto__)
 * que vem da propriedade prototype da função cosntrutora que foi usada para
 * cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
 * do JavaScript vai tentar encontrar este membro no próprio objeto e depois a
 * cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal
 * membro.
*/

// Construtora -> molde (classe)
(function () {
    // Function create a person
    function Person (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;

        // Methods
        //this.fullName = () => this.name + ' ' + this.surname;
    };

    Person.prototype.happ = function () {
        return this.name + '' + this.surname;
    }

    // Instancia
    const person1 = new Person('Leonardi', 'Melo', 18);
    console.dir(person1);
})();
