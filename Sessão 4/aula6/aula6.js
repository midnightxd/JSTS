// Aula 3 (funções de callbak)
//SetTimeOut simula algum carregamento

(function () {
    // generate a number random
    function rand (min = 1000, max = 5000) {
        const interval = Math.random() * (max - min) + min;
        return interval;
    }

    //Ex1
    function Ex1 (callbak) {
        setTimeout (function () {
            console.log('Função 1');
            if (callbak) callbak();
        }, rand());
    }

    // Ex2
    function Ex2 (callbak) {
        setTimeout (function () {
            console.log('Função 2');
            if (callbak) callbak();
        }, rand());
    }

    //Ex3
    function Ex3 (callbak) {
        setTimeout (function  () {
            console.log('Função 3');
            if (callbak) callbak();
        }, rand());
    }

    // Calls (callback hell)
    console.log('Running...\n');
    function calls () {
        Ex1 (ex1CallBack);
        function ex1CallBack () {
            Ex2 (ex2Callback);
        }
        function ex2Callback () {
            Ex3 (ex3Callback);
        }
        function ex3Callback () {
            console.log('Exiting...');
        }
    }
    calls();

})();
