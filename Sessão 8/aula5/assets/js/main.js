//
(function () {
  axios('pessoas.json')
    .then(response => loadElementPage(response.data));

  function loadElementPage(json) {
    const table = document.createElement('table');
    for (let person of json) {
      const tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerHTML = person.nome
      tr.appendChild(td);

      let td2 = document.createElement('td');
      td2.innerHTML = person.idade;
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      td3.innerHTML = person.salario;
      tr.appendChild(td3)
      table.appendChild(tr)

      let td4 = document.createElement('td');
      td4.innerHTML = person.cpf;
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      td5.innerHTML = person.email;
      tr.appendChild(td5);

    }
    const result = document.querySelector('.result');
    result.appendChild(table)
  }
})();