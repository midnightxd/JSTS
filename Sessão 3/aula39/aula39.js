// Aula 39 Break e Continue

function main () {
    // array
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number === 2){
            continue;
        }
        console.log(number);
    }
}
main();
