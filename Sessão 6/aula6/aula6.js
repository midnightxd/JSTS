// Aula 6 - Manipulando prototypes

(function () {
    // Criando um objeto(literal) para explicar melhor
    function Product (name, price, stock, color) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.color = color;
    }

    Product.prototype.descont = function (percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    const produto = new Product('Camisa', 300, 10, 'Red');
    
    // Criando um objeto literal
    const produto_ = {
        nome: 'Bone',
        price: 400
    };
    Object.setPrototypeOf(produto_, Product.prototype);

    produto.descont(30);
    produto_.descont(30);
    console.log(produto);
    console.log(produto_);
})();
