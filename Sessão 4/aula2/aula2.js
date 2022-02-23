// Aula 2 (Parâmetros de uma função)
/*
    OBS: argumentos são valores que enviamos para os parâmetros.
    A função defida com a palavra function tem uma variavel especial chamada de arguments
    que sustenta todos os argumentos enviados.
*/

//Ex!1
function funcTest (){
    let total = 0;
    for (let args of arguments){
        total += args;
    }
    console.log(total);
}
//funcTest(1, 2, 3, 4, 5, 6, 7);

//Ex!2
function sum(a, b = 2, c = 4) {
    //b = b || 0; Isso é a maneira antiga
    console.log(a + b + c);
}
//sum(2, undefined, 20);

//Ex!3 Desestruturação dentro da função (objeto)
const obj = { name: 'Leonardi', age: 18 }
function Ex3({ name, age }) {
    console.log('Objeto\n', name, age);
}
Ex3(obj);

//Ex!4 Desestruturação dentro da função (array)
const array = [1, 2];
function Ex4 ([value, value_]) {
    console.log('Array\n', value, value_);
}
Ex4(array);
