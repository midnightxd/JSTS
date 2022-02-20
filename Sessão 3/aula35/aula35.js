// Aula de For in (estrutura de repetição)
//OBS: Um array de apenas uma dimensão pode ser chamado de vetor

function mainCode () {
    //Global Array and object
    const fruits = ['apple', 'banana', 'papaya', 'pear'];
    const person = {
        name: 'Leonardi',
        surname: 'Melo',
        age: 18,
        stateUF: 'PI'
    };
    const {name, age} = person;
    
    //classic For
    function forClassic () {
        for (let i = 0; i < fruits.length; i++) {
            let msg = `Position: ${i} Name: ${fruits[i]}`;
            console.log(msg);
        }
    }
    
    //For in
    function forIn() {
        // for (let i in fruits) {
        //     console.log(fruits[i]);
        // }
        for (let key in person) {
            console.log(key, person[key]);
        }
    }
    // Call functions
    forIn();
    //forClassic();
}
mainCode();