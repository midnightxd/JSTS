// Aula 2 Object.defineProperty() e Object.definePropertiles()
// Auto inveoked function

(function () {
    // Create a new id from productor
    function createId (min = 100, max = 999) {
        const rand = Math.random() * (max - min) + min;
        return rand.toFixed(0);
    }

    // Create a new productor
    function Productor (name, price, stock, id = createId()) {
        this.name = name;
        this.price = price;
        // this.stock = stock;
        this.id = id;
        Object.defineProperties(this, {
            name: {
                enumerable: true,
                value: name,
                writable: false,
                configurable: true
            },
            price: {
                enumerable: true,
                value: price,
                writable: false,
                configurable: true
            }
        })

        // Object.defineProperty(this, 'stock', {
        //    enumerable: true, // Mostra a chave
        //    value: stock, // Mostra o valor
        //    writable: false, // Pode ou não alterar o valor
        //    configurable: true // Confiigura
        // });
    }
    const productor1 = new Productor('Tablet', '1.400', 3, createId());
    productor1.stock = 300;
    console.log(productor1);
})();
