//Calculadora usando funções construtoras

(function () {
    // Create caulculator
    function Calculator () {
        // Atributos publicos
        this.display = document.querySelector('.display');

        //Methods
        this.init = () => {
            this.captureClick();
            this.pressKey();
        };

        //Capture click
        this.captureClick = () => {
            document.addEventListener('click', event => {
                const element = event.target;
                //Check condition from buttons
                if (element.classList.contains('btn-num')) this.addValueFromDisplay(element);
                if (element.classList.contains('btn-clear')) this.clearValueFromDisplay();
                if (element.classList.contains('btn-del')) this.removeCharacter();
                if (element.classList.contains( 'btn-eq')) this.finishCalc();
            });
        };

        //Add value from Display
        this.addValueFromDisplay = element => this.display.value += element.innerText;
        //Clear value
        this.clearValueFromDisplay = () => this.display.value = '';
        //Remove a character
        this.removeCharacter = () => this.display.value = this.display.value.slice(0, -1);

        //Finish calc (Atention contain bug)
        this.finishCalc = () => {
            let calc = this.display.value;
            try {
                calc = eval(calc);
                if (!calc) {
                    alert('conta inválida');
                }
                this.display.value = calc;
            } catch (error) {
                alert('conta inválida');
                return;
            }
        };

        this.pressKey = () => {
            this.display.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    this.finishCalc();
                }
            });
        };
    };
    //
    const initCalc = new Calculator();
    initCalc.init();
})();
