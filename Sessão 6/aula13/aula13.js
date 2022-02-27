// Aula 13 - Objeto Map()

(function() {
  const persons = [
    { id:3, nome: 'Leonardi' },
    { id:2, nome: 'Melo'},
    { id:1, nome: 'joão' },
  ];

  const  newPersons = new Map();
  for (const person of persons) {
    const { id } = person;
    newPersons.set(id, { ...person });
  }

  console.log(newPersons);
})();
