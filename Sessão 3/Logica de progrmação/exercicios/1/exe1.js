// Escreva uma função que recebe dois valores e retorne o maior deles

function main () {
    function enterMaxNumber (max, min) {
        if (max > min) console.log(`${max} é maior que ${min}.`);
        if (max < min) console.log(`${max} é menor que ${min}.`);
    }
    enterMaxNumber(1, 0);
}
main();
