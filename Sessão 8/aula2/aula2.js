// Aula 2 - Métodos uteis para promises

(() => {
    function rand(max, min) {
        min *= 1000;
        max *= 1000;
        return Math.random() * (max - min);
    }

    function aweting(msg, time) {
        return new Promise((resolve, reject) => {
            if(typeof msg !== 'string') {
                reject(false);
                return;
            }
            setTimeout(() => {
                resolve(msg.toUpperCase() + ' - Is a promise');
            }, time);
        });
    }

    const promises = [
        'Primeiro valor',
        aweting(11111, 1000),
        aweting('Testing 3'), 2000,
        aweting('Testing 4', 4000)
    ]

    Promise.all(promises)
        .then((dates => {
            console.log(dates);
        }))
        .catch(e => {
            console.log('Isso é um erro', e);
        })
})();