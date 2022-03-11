// Aula 1 - Criando Classes

(function(){
  // My class
  class Person {
    constructor(name, surname, age) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }
    speak() {
      console.log(`${this.name} está falando`);
    }
  }

  const person = new Person('Leonardi', 'Melo', 18);
  console.log(person);
})();
