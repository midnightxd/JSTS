//Aula 3 concatenando um array
//OBS: ...rest, ...spread
const num = [1, 2, 3, 4, 5];
const num_ = [6, 7, 8, 9, 10];
//Concatenação usando o metodo concat()
//const arrayOut = num.concat(num_);

//Concatenação usando o spread operador
const arrayOut = [...num, 'Elements', ...num_, ...[11, 12, 13, 14, 15]];
console.log(arrayOut);