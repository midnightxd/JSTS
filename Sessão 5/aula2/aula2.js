// Metodo splice
// array.splice(indice atual, delete, elem1, elem2, elem3)
//               -5        -4        -3     -2       -1
//                0         1         2      3        4
const myName = ['João', 'Leonardi', 'Da', 'Silva', 'Melo'];
//Simulando o push
//myName.splice(myName.length, 0, 'Elem 1', 'Elem 2');

//Simulando o shift
//const drop = myName.splice(0, 1);

//Simulando o unshift
myName.splice(0, 0, 'Add 1', 'Add 2');

//Simulando o pop
//const dropElements = myName.splice(4, 1); //Pode também retornar o elemento removido
console.log(myName);

