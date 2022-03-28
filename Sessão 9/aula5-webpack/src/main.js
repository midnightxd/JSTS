import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const outCPF = document.querySelector('.cpf-gerado');
    outCPF.innerHTML = gera.genereteNewCPF();
})();