/*
    Funções simples
*/

//
function saudacao (nome) {
    return `Bom dia ${nome}`;
}
const nome = saudacao(`Leonardi`);
console.log(nome);

//
function soma (x, y) {
    return resultado = (x + y);
}
const saida = soma(18,19);
console.log(saida);

//variavel que recebe uma função
const raiz = function (nRaiz) {
    return nRaiz ** 0.5;
}
console.log(raiz(9));

//Arrow function
//const mult = (num, num_) => resultado = (num * num_);
//
const mult = (num, num_) => {
    return resultado = (num * num_);
}

console.log(mult(3, 8));