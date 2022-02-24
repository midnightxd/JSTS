// Aula7 - Herança

(function () {
    // Create a factory function
    // Product --> descont and increase
    // EX: T-shirt = cor, cup = material
    
    // Constrctor
    function Product (name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    };

    // Set as method using prototype
    Product.prototype.increase = function (value) {
        this.price += value;
    };
    Product.prototype.descont = function (value) {
        this.price -= value;
    };

    // Create a t-shirt
    function Tshirt (name, price, color, brand) {
        Product.call(this, name, price);
        this.color = color;
        this.brand = brand;
    };
    
    // Create a cup
    function Cup (name, price, color, material, model, stock) {
        Product.call(this, name, price, color);
        this.material = material;
        this.model = model;
        Object.defineProperty(this, 'stock', {
            enumerable: true,
            configurable: false,
            get: function () {
                return stock;
            },
            set: function () {
                if (typeof value !== 'number') return;
                stock = value;
            }
        });
    };

    // tshirt
    Tshirt.prototype = Object.create(Product.prototype);
    Tshirt.prototype.constructor = Tshirt;
    // Cup
    Cup.prototype = Object.create(Product.prototype);
    Cup.prototype.constructor = Cup;

    // Instance
    const cup = new Cup('Xicara', 150, 'Grey', 'Glass', 'Cub', 13);
    const tshirt = new Tshirt('Regatta', 300, 'Black', 'Nike');

    // Out
    console.log(cup);
    console.log(tshirt);
})();
