// Aula 1 (maneiras de declarar funções)
//As funções em javascript são First-class objects (objetos de primeira classe)
//Exemplo criar uma função com um dado (Function expression)
/*
    const name = 'Leonardi';
    const createPerson = function (name, age) {.....}
*/
const funcOne = function () {
    console.log('Hi, my name is Leonardi...');
}

function executeFuntion (func) {
    func();
}
executeFuntion(funcOne);

// Exemplo de arrow function
const funcA = () => {
    console.log('Arrow function');
}
funcA();

//Pode ser declarada dentro de um objeto
const object_ = {
    fala() {
        console.log('Oi');
    }
}
object_.fala();
