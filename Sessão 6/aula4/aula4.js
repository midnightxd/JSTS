/*
 * Object.values
 * Object.entries
 * Object.assign (des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...spread()
 * Object.key (retorna as chaves)
 * Object.freeze congela o objeto
 * Object.defineProperties (define váriaveis e property)
 * Object.defineProperty (define uma popriedade)
 */

(function () {
    // Exemplo 1
    function exemple1 () {
        const item = { name: 'Caneca', price: 1.80 };
        const item2 = {
            ...item, // Copia o objeto original
            material: 'Vidro' // Adiciona uma nova chave
        };

        item2.name = 'Caneca2';
        item2.price = 2.50;
        console.log(item);
        console.log(item2);
    };

    // Exemplo 2
    function exemple2 () {
        const item = { name: 'lapis', price: 1.2 };
        const item2 = Object.assign({}, item, {
            material: 'Algodão'
        });

        item2.name = 'Boné';
        item2.price = 64.50;
        console.log(item);
        console.log(item2);
    };

    // Exemplo 3
    function exemple3 () {
        const item = { name: 'Caderno', price: 40.50 };
        const item2 = { name: item.name = 'Notebook', price: item.price = 100 };

        console.log(Object.getOwnPropertyDescriptor(item2, 'name'));
    };
    // Calls
    // exemple1();
    // exemple2();
    exemple3();
})();
