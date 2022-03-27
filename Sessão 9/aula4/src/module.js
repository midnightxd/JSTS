class Product {
    constructor(name, type, width, weidth) {
        this.name = name;
        this.type = type;
        this.width = width;
        this.weidth = weidth
    }
}

function createNewID(max = 99999, min = 10000) {
    const ranger = Math.random() * (max - min) + min;
    return ranger.toFixed(5);
}

export {
    Product,
    createNewID as default
}