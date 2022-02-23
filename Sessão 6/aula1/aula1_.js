//Hi, my name is leonardi, sorry it's my code

(function () {
    // Generete a ID with tree digites
    function genereteId (min = 100, max=999) {
        const rand = Math.random() * (max - min) + min;
        return rand.toFixed(0);
    }

    // Function create person
    function Person (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    // Set a person
    const person = new Person('Leonardi', 'mel')
})();

