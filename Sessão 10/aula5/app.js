const path = require('path');
const pathFile = path.resolve(__dirname, 'test.json');
const write = require('./modules/write')
const read = require('./modules/read');

// const person = [
//     { nome: 'João'},
//     { nome: 'Maria'},
//     { nome: 'karlos'},
//     { nome: 'Eduardo'},
// ];

// const json = JSON.stringify(person, '', 2);
// write(pathFile, json);

async function readinFile (pathFile) {
    const date = await read(pathFile);
    renderDate(date);
}

function renderDate(date) {
   date = JSON.parse(date);
   date.foreach(val => console.log(val))
}

readinFile(pathFile);