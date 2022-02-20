// Aula 7 Filter, map, reduce

const numbers = [203, 21, 11, 1, 3, 4, 7, 8, 100, 12, 15];
const numberPar = numbers
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((acumulador, value) => acumulador += value);
console.log(numberPar);


//[ 4, 8, 100, 12 ] //Pares
//[ 8, 16, 200, 24 ] //Dobro
