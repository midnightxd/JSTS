// Aula de For of ( estrutura de repetição)

function mainCode () {
    function main () {
        // STR
        const fruits = ['apple', 'banana', 'papaya', 'pear'];
        //Classic For
        function classicFor_ () {
            for (let i = 0; i < fruits.length; i++) {
                console.log(fruits[i]);
            }
        }
        //For in
        function forIn_ () {
            for (let i in fruits) {
                console.log(fruits[i]);
            }
        }
        //For of
        function forOf_ () {
            for (let i of fruits) {
                console.log(i);
            }
        }
        function forEach_ () {
            fruits.forEach(function (value, key, array) {
                console.log(value, key);
            });
        }
        // Call functions
        //forEach_();
        forOf_();
        //forIn_();
        //classicFor_();
    }
    main();
}
mainCode();
