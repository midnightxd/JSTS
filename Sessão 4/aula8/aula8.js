// Funçãofábrica (factory function)
//Get -> Getter Set -> Setter
//set nameFull (value) {value}
//Hosting

(function () {
    //Create a new person
    function createNewPerson (name, surname, height, weight) {
        const objPerson = {
            name: name,
            surname: surname,
            height: height,
            weight: weight,
            //Methods
            speak (assunto) {
                return `${this.name} está falando ${assunto}`;
            },
            //Get imc (Getter)
            get imc () {
                const resultImc = this.weight / (this.height ** 2);
                return resultImc.toFixed(2);
            },
            //Get full name (Setter)
            get nameFull () {
                return `${this.name} ${this.surname}`;
            }
        }
        return objPerson;
    }
    //Function return person
    function rePerson () {
        const person1 = createNewPerson('João', 'Leonardi', 1.70, 70);
        console.log(person1.nameFull, person1.imc)

    }
    rePerson();
})();
