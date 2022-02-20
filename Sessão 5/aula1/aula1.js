//Revisão basico em arrays
//Array literal
//const array = ['João', 'Leonardi', 'Silva', 'Melo'];
//remove o elemento mais não o indice
//delete array[2];
//unshift() adiciona no começo do array
//slice() fatia o array
//shift(remove) trabalha no começo do array e pop(remove) trabalaha no final
//push() adiciona no final do array

(function () {
    exemplo1 = () => {
        //Usando o construtor Array
        const names = new Array('João', 'Leonardi', 'Da', 'Silva', 'Melo');
        const names_ = [...names];
        names_.push('2003-2022');

        for (let i = 0; i < names_.length; i++) {
        console.log(names_[i]);
        }
    }
    
    //convertendo uma string em um array
    exemplo2 = () => {
        //
        const myName = 'João Leonardi da Silva Melo';
        const names = myName.split(' ');
        console.log(names);
    }
    //converte um array em uma string
    exemplo3 = () => {
        const myName = ['João', 'Leonardi', 'Da', 'Silva', 'Melo'];
        const names = myName.join(' ');
        console.log(names);
    }
    //call functions
    //exemplo1();
    //exemplo2();
    exemplo3();
})();
