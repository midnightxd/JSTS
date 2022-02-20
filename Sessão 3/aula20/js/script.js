function meuEscopo () {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const pessoa = [];

    const erro = 1
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        // verificar o que estamos selecionando
        console.log(pessoa);
        result.innerHTML += `<p>${nome.value}, ${sobrenome.value},`+
        `${peso.value}, ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
