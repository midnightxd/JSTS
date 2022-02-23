// Aula 42 (setInterval e setTimeout)

function main () {
    //create hour
    function createHour () {
        const data = new Date();
        return data.toLocaleTimeString();
    }

    const timer = setInterval(function () {
       console.log(createHour());
    }, 1000);

    setTimeout (function () {
        clearInterval(timer);
    }, 10000);
}
main();
