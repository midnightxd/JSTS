        //it's my code
        /*
        const tresHoras = 60 * 60 * 3 * 1000;
        const umDia = 60 * 60 * 24 * 1000;
        const data = new Date(0 + tresHoras + umDia); //timestamp unix ou época unix
        
        const data = new Date(); //mes em javascript começa do 0-11 | a, m, d, h, M, s, ms
        */

function escopo () {
    mostrarData = () => {
        //const data = new Date('2022-01-16T21:23:50');
        //console.log('Dia:', data.getDate());
        //console.log(data.toString());
        //return;
    }

    addZeroAEsquerda = (num) => {
        return num >= 10 ? num : `0${num}`;
    }

    formataData = (data) => {
        const dia = addZeroAEsquerda(data.getDate());
        const mes = addZeroAEsquerda(data.getMonth() + 1);
        const ano = addZeroAEsquerda(data.getFullYear());
        const hora = addZeroAEsquerda(data.getHours());
        const min = addZeroAEsquerda(data.getMinutes());
        const seg = addZeroAEsquerda(data.getSeconds());

        msg = `Data autal [${dia}/${mes}/${ano} - ${hora}:${min}:${seg}]`;
        return msg;
    }
    const data = new Date();
    const dataBr = formataData(data);
    console.log(dataBr);
}
escopo();
