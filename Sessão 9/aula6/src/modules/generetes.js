//

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const simbols = ',./;~^[]{}()!"@#$%&*`+=-';

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const geraSimbols = () => simbols[rand(0, simbols.length)];

export default function gerePass(qtd, number, maiusculas, minusculas, simbols) {
    const passArray = [];
    qtd = Number(qtd);
    for (let i = 0; i < qtd; i++) {
        maiusculas && passArray.push(geraMaiuscula());
        minusculas && passArray.push(geraMinuscula());
        number && passArray.push(geraNumero());
        simbols && passArray.push(geraSimbols());
    }
    return passArray.join('').slice(0, qtd);
}