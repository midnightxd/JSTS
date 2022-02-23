// Aula7 - Herança

(function () {
    // Create a factory function
    // Product --> descont and increase
    // EX: T-shirt = cor, cup = material
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

    Tshirt.prototype = Object.create(Product.prototype);
    Tshirt.prototype.constructor = Tshirt;
    // Instance
    const cup = new Product('Cup', 12, 'Red');
    const tshirt = new Tshirt('Regatta', 300, 'Black', 'Nike');

    // Out
    console.log(cup);
    console.log(tshirt);
})();
