//Incio do script
function escopoImc(){

    const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
	    const inputPeso = event.target.querySelector('#peso');
	    const inputAltura = event.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        if (!peso) {
            setResult('Peso inválido', false);
            return;
        }
        
        if (!altura) {
            setResult('Altura inválida', false);
        return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `O seu IMC é: ${imc}, (${nivelImc})`;

        setResult(msg, true);
    });

    //calcular o imc
    function getImc (peso, altura) {
        const imc =  peso / altura ** 2;
        return imc.toFixed(2);
    }
    
    //status do imc
    function getNivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    //cria um paragrafo
    function criaParagrafo () {
        const p = document.createElement('p');
        return p;
    }

    //mostra o resultado dentro do html
    function setResult (msg, isValid) {
        const result = document.querySelector('#result');
        result.innerHTML = '';

	    const p = criaParagrafo();
        if (isValid) {
            p.classList.add('p-result');
        } else {
            p.classList.add('p-result-bad');
        }

        p.innerHTML = msg;
        result.appendChild(p);
    }
}
escopoImc();

