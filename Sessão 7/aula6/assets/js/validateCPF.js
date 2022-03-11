//weff
class ValidateCPF {
    constructor(sendCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sendCPF.replace(/\D+/g, '')
        })
    }
    sequence() {
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }

    genereteNewCPF() {
        const cpfParse = this.cleanCPF.slice(0, -2);
        const digit = this.genereteDigit(cpfParse);
        const digit2 = this.genereteDigit(cpfParse + digit);
        this.newCPF = cpfParse + digit + digit2;
    }

    genereteDigit(cpfParse) {
        let total = 0;
        let reverseValue = cpfParse.length + 1;

        for (let i of cpfParse) {
            total += reverseValue * Number(i);
            reverseValue--;
        }

        const digit_ = 11 - (total % 11);
        return digit_ <= 9 ? String(digit_) : '0';
    }

    validate() {
        if (!this.cleanCPF) return false;
        if (typeof this.cleanCPF !== 'string') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.sequence()) return false;

        this.genereteNewCPF();
        return this.newCPF === this.cleanCPF;
    }
}

let valida = new ValidateCPF('096.921.621-89');
if (valida.validate()) {
    console.log('CPF valido');
} else {
    console.log('CPF invalido');
}