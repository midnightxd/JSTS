// Aula 40 try, catch, throw

function main () {
    function sum (numX, numY) {
        if (typeof numX !== 'number' || typeof numY !== 'number') {
            throw new Error (`Type of date is not a number (NaN)`);
        }
        let sum = (numX + numY);
        console.log(`The result of operation is: ${sum}.`);
    }
    try {
        //sum(1,2);
        sum('1', 2);
    } catch (error) {
        console.log('Tipo de dado invalido');
    } 
}
main();
