import ValidateCPF from "./ValidateCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    format(cpf) {
        return (
          cpf.slice(0, 3) + '.' +
          cpf.slice(3, 6) + '.' +
          cpf.slice(6, 9) + '-' +
          cpf.slice(9, 11)
        );
    }

    genereteNewCPF() {
        const cpfParse = this.rand();
        const digit = ValidateCPF.genereteDigit(cpfParse);
        const digit2 = ValidateCPF.genereteDigit(cpfParse + digit);
        const newCpf = cpfParse + digit + digit2;
        return this.format(newCpf);
    }
}