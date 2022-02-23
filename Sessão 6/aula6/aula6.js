// Aula 6 - Manipulando prototypes

(function () {
    // Criando um objeto(literal) para explicar melhor
    function Product (name, price, stock, color) {
        // Atributes
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color;
    }

    Product.prototype.descont = function (percent) {
        // Methods
        this.price = this.price - (this.price * (percent / 100));
    }

    const produto = new Product('Camisa', 300, 10, 'Red');
    produto.descont(30);

    // Create a new object literal
    const produto_ = {
        nome: 'Bone',
        price: 400
    };
    
    // Example
    const produto3 = Object.create(Product.prototype, {
        price: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 41
        },
        size: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 130
        },
        name: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 'Cup'
        },
        stock: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 200
        },
        color: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 'Platinum'
        }
    });

    // Example
    Object.setPrototypeOf(produto_, Product.prototype);
    produto_.descont(30);
    
    produto3.descont(20);

    // Out
    console.log(produto);
    console.log(produto3);
})();
