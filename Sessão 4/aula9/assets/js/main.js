//Calculadora usando factory function

(function () {
    function createCalculator () {
        return {
            //Atributes
            display: document.querySelector('.display'),

            //Methods
            initCalculator () {
                this.clickButtons();
                this.pressKey();
            },

            //Functions from buttons
            clickButtons () {
                document.addEventListener('click', event => {
                    const element = event.target;
                    //Check condition from buttons
                    if (element.classList.contains('btn-num')) {
                        this.btnFromDisplay(element.innerText);
                    }
                    if (element.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }
                    if (element.classList.contains('btn-del')) {
                        this.removeOneCharacter();
                    }
                    if (element.classList.contains('btn-eq')) {
                        this.finishCalc();
                    }
                });
            },

            //btn from display
            btnFromDisplay (value) {
                this.display.value += value;
            },

            //Clear Display
            clearDisplay () {
                this.display.value  = '';
            },

            //Delete character
            removeOneCharacter () {
                this.display.value = this.display.value.slice(0, -1);
            },

            //Finish calc (contain bugs)
            finishCalc () {
                let calc = this.display.value;
                try {
                    calc = eval(calc);
                    if (!calc) {
                        alert('Conata inválida');
                    }
                    this.display.value = calc;
                }
                catch (error) {
                    alert('conta inválida');
                    return;
                }
            },

            // press key
            pressKey () {
                this.display.addEventListener('keyup', event => {
                    const keypress = event.value;
                    if (event.keyCode === 13){
                        this.finishCalc();
                    }
                });
            }
        }
    }
    const initCalc = createCalculator();
    initCalc.initCalculator();
})();
