// Aula 7 Funções Imediatas (IIFE -> Immediately Invoked Function Expression)

(function () {
    //Create a new data
    function createNewDate () {
        const data = new Date();
        data.toLocaleTimeString;
        console.log(data);
    }
    createNewDate();
})();
