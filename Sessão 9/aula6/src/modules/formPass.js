import gerePass from "./generetes";

const senhaGerada = document.querySelector('.outpass');
const qtdCaracters = document.querySelector('.qtd-caracters');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumber = document.querySelector('.chk-number');
const chkSimbols = document.querySelector('.chk-simbols');
const geraSenha = document.querySelector('.gera-senha');

export default () => {
    geraSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
};

function gera() {
    const senha = gerePass(
        qtdCaracters.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumber.checked,
        chkSimbols.checked
    );
    return senha;
}