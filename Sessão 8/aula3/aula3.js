// Aula 3 Async / Await
(() => {
    function newTime(max, min) {
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
                resolve(msg.toUpperCase() + '===> Status Ok!');
                return;
            }, time);
        });
    }
})