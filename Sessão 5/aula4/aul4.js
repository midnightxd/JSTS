// Aula 4 Filtrando arras, (Filter --> sempre retorna um array, com a mesma qunatidade de elementos ou menos);

(function () {
    //Retorne os números maiores que que 10
    const numbers = [203, 21, 11, 1, 3, 4, 7, 8, 100, 12, 15];
    //Maneira 1
    // callBackFilter = value => {
    //     return value > 10;
    // };

    //Maneira 2 (mais usada)
    const arrayFilter = numbers.filter(value => value > 10);
    console.log(arrayFilter);
});
//

(function () {
    //Retorne as pessoas que tem 5 letras ou mais
    //Retorne as pessoas com mais de 50 anos
    //Retorne as pessoas cujo nome termina com a letra a

    const persons = [
        { name: 'Luiz', age: 62 },
        { name: 'Maria', age: 23},
        { name: 'Eduardo', age: 55},
        { name: 'Letícia', age: 19},
        { name: 'Wallace', age: 47}
    ];
    //Retorna os nomes
    const personOutFilterName = persons.filter(objectName => objectName.name.length >= 5);
    //console.log(personOutFilterName);
    
    //Retorna as pessoas com idade maior que 50
    const personOutFilterAge = persons.filter(objectAge => objectAge.age > 50);
    //console.log(personOutFilterAge);

    //Retorna as pessoas cujo o nime termina com a letra a
    const personFinalyLetter = persons.filter(objectLetter => objectLetter.name.toLowerCase().endsWith('a'));
    console.log(personFinalyLetter);
})();
