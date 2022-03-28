export default class ValidateCPF {
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
        const digit = ValidateCPF.genereteDigit(cpfParse);
        const digit2 = ValidateCPF.genereteDigit(cpfParse + digit);
        this.newCPF = cpfParse + digit + digit2;
    }

    static genereteDigit(cpfParse) {
        let total = 0;
        let reverse = cpfParse.length + 1;
    
        for(let i of cpfParse) {
          total += reverse * Number(i);
          reverse--;
        }
    
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
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