// Aula 10 - Exercicio validar cpf

(function () {
    // Create a function validate cpf
  function ValidateCpf (requestCpf) {
    Object.defineProperty(this, 'clearCpf', {
      enumerable: true,
      get: function () {
        return requestCpf.replace(/\D+/g, '');
      }
    });
  };
  // Prototype
  ValidateCpf.prototype.validate = function () {
    if(typeof this.clearCpf === 'undefined') return false;
    if(this.clearCpf.length !== 11) return false;
    if(this.isSequence()) return false;

    const cpfParse = this.clearCpf.slice(0, -2);
    const digitOne = this.createDigit(cpfParse);
    const digitTow = this.createDigit(cpfParse + digitOne);
    const newCpf = cpfParse + digitOne + digitTow;
    return newCpf === this.clearCpf;
  };

  //
  ValidateCpf.prototype.createDigit = function (cpfParse) {
    const arrayCpf = Array.from(cpfParse);
    let regresiveCpf = arrayCpf.length + 1;
    const total = arrayCpf.reduce((ac, value) => {
      ac += (regresiveCpf * Number(value));
      regresiveCpf--;
      return ac;
    }, 0);
    const digit = 11 - (total % 11);;
    return digit > 9 ? '0' : String(digit);
  };

  //
  ValidateCpf.prototype.isSequence = function () {
    const sequence = this.clearCpf[0].repeat(this.clearCpf.length);
    return sequence === this.clearCpf;
  }

  const cpf = new ValidateCpf('096.9216.23-89');
  console.log(cpf.validate());
})();
