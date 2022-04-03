const fs = require('fs').promises;
const path = require('path');
const pathFile = path.resolve(__dirname, '..', 'test.txt');

fs.writeFile(pathFile, 'Test as bien sucssesfuly', { flag: 'w', encoding: 'utf-8' })