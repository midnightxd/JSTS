(() => {
  class ValidateForm {
    constructor() {
      this.form = document.querySelector('.flux');
       
      this.events();
    }

    events() {
      this.form.addEventListener('submit', event => {
        this.handleSubmit(event);
      }) 
    }

    handleSubmit(event) {
      event.preventDefault();
      const checkoutFields = this.checkFields();
    }

    checkFields() {
      let valid = true;
      for(let errorText of this.form.querySelectorAll('.error-text')) {
        errorText.remove();
      }

      for(let field of this.form.querySelectorAll('.validate')) {
        const labelError = field.previousElementSibling.innerHTML;
        if(!field.value) {
          this.createError(field, `The field ${labelError} cannot be blank.`);
          valid = false;
        }
        if(!field.classList.contains('cpf')) {
          if(this.validateCPF(field)) valid = false;
        }
      }
    }
    validateCPF(field) {
      const cpf = new ValidateCPF(field.value);
      if(!cpf.validate()) {
        this.createError(field, 'CPF invalido');
        return false;
      }
      return true;
    }

    createError(camp, msg) {
      const div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('error-text');
      camp.insertAdjacentElement('afterend', div);
    }
  }

  (loader = () => {
    const validate = new ValidateForm();
  })();
})();
