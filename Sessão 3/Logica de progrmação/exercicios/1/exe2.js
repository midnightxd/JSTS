// modo paisagem width > height
// retrato heigth > width

function main () {
    ePaissagem = (w, h) => {
        if (w > h) console.log('Modo paissagem');
        if (w < h) console.log('Modo retrato');
    }
    const screen = (w, h) => w > h;
    console.log(screen(768, 1366));

    //ePaissagem(1366, 768);
}
main();