// Aula Try catch finally (try executada qundo não há erros, catch executada quando há erros 
//finally é sempre executada)

function main () {
    function createHour (data) {
        if (data && ! (data instanceof Date)) {
            throw new TypeError (`Esperando instância de Date.`);
        }
        if (!data) data = new Date();
        return data.toLocaleTimeString('pt-BR');
    }
    try {
        createHour();
        const hour = createHour();
        console.log(hour);
    } catch (error) {
        const msg = `Isso é um erro.`;
        console.log(msg);
    } finally {
        console.log(`code as been executed`);
    }
}
main();
