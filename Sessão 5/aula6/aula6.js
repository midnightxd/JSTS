//Aula 6 reduce
//reduce (acumulador, valor, indice, array)

const numbers = [203, 21, 11, 1, 3, 4, 7, 8, 100, 12, 15];
const arrayTotalNumbers = numbers.reduce((acumulador, value, index, array) => {
    acumulador.push(value * 2);
    return acumulador;
}, []);
// console.log(arrayTotalNumbers);

const persons = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23},
    { name: 'Eduardo', age: 55},
    { name: 'Letícia', age: 19},
    { name: 'Rossana', age: 32},
    { name: 'Wallace', age: 47}
];

const personOld = persons.reduce((acumulador, value) => {
   if (acumulador.age > value.age) return acumulador;
   return value;
});
console.log(personOld);
