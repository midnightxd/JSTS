// Aula 5 Map - Mapeando um array

const numbers = [9, 12, 3, 4, 7];
const numberDouble = numbers.map(value => value * 2);
//console.log(numberDouble);

const persons = [
    { name: 'Luiz', age: 62},
    { name: 'Maria', age: 23},
    { name: 'Eduardo', age: 55},
    { name: 'Letícia', age: 19},
    { name: 'Rossana', age: 32},
    { name: 'Wallace', age: 47}
];

genereteID = (min = 1000, max = 9999) => {
    const rand = Math.random() * (max - min) + min;
    return rand.toFixed(0);
}

const names = persons.map(objectName => objectName.name);
const ages = persons.map(objectAge => ({ age: objectAge.age}));
const personID = persons.map(objectID => {
    const newObject = {...objectID};
    newObject.id = genereteID();
    return newObject;
});
console.log(personID);
