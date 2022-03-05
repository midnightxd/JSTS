// Aula 3 Async / Await
(() => {
    function newTime(max = 3, min = 0) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    function awaiting(msg, time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(typeof msg !== 'string') {
                    reject('Stoped code');
                    return;
                }
                resolve(msg.toUpperCase() + ' ===> Status Ok!');
                return;
            }, time);
        });
    }

    // awaiting('State 1', newTime(0, 3))
    //     .then(value => {
    //         console.log(value);
    //         return awaiting('State 2', newTime());
    //     })
    //     .then(level => {
    //         console.log(level);
    //         return awaiting('Level 3', newTime());
    //     })
    //     .then(level => {
    //         consolele.log(level);
    //     })
    //     .catch(e => {
    //         console.log('Isso é um erro', e);
    //     });

    async function exec() {
        try {
            const leve1 = await awaiting('Found dada level', newTime());
            console.log(leve1);

            const level2 = await awaiting('Found data level', newTime());
            console.log(level2);

            const level3 = await awaiting(1, newTime());
            console.log(level3);
        } catch(e) {
            console.log('Houve um erro...');
        }
    }
    exec()
})();