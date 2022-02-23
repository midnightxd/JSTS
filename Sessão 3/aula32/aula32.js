//Aula de atribuição via desestruturação (Objetos) ...rest

initCode = () => {
    createPerson = () => {
        const person = {
            name: 'Leonardi',
            surname: 'Melo',
            age: 18,
            adress: {
                street: 'José Maria Santiago',
                numberHouse: 488,
                city: 'José de Freitas'
            }
        }
        //atribuição via destruturação
        const {name, surname, age, adress: {street, numberHouse}} = person;
        let msg = `Name: ${name}.\nSurname: ${surname}.\nAge: ${age}\nAdress: ${street}, ${numberHouse}`
        console.log(msg);
    }
    createPerson();
}
initCode();
