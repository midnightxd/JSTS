// Aula3 Getter e Setters

(function () {
    // Faunc
    function Produto (name, price, stoque) {
        this.name = name;
        this.price = price;
        this.stoque = stoque;
        let stoqueTmp = stoque;

        Object.defineProperty(this, 'stoque', {
            enumerable: true,
            configurable: true,

            // Configurando o metodo Getter
            get: function () {
                return stoqueTmp;
            },
            set: function (valor) {
                if (typeof valor !== 'number') {
                    throw new TypeError('Isso é um erro');
                }
                stoqueTmp = valor;
            }
        });
    };

    // Factory Function
    function createProductor (name) {
        return {
            get name () {
                return name;
            },
            set name (value) {
                name = value;
            }
        };
    };

    function callsValue () {
        // Pruduto 2
        const productor2 = createProductor('Camisa');
        console.log(productor2.name);
    }
    // Calls
    callsValue();
})();
