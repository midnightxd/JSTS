// Aula 1 promises
(function() {
  function rand(min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  function awiting(msg, time) {
    return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject('Bad value');
      setTimeout(() => {
        resolve(msg);
      }, time);
    })
  }

  awiting('Testing 1', rand(1, 2))
    .then(resposta => {
      console.log(resposta);
      return awiting('Testing 2', rand(1, 2));
    })
    .then(resposta => {
      console.log(resposta);
      return awiting('testing 3', rand(1, 2));
    })
    .then(resposta => {
      console.log(resposta);
      return awiting(1234, rand(1, 2));
    })
    .then(resposta => {
      console.log(resposta);
    })
    .catch(e => {
      console.log('isso é um erro', e);
    });
})();