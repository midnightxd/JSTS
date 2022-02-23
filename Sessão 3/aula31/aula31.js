// aula de atribuição via desestruturação (Arrays)
initCode = () => {
    funcArray = () => {
        //              0  1  2  3  4  5
        // const number = [1, 2, 3, 4, 5, 6];
        // const [numberOne, numberTwo, ...rest] = number; //atribuição via desestruturação
        // console.log(numberOne, numberTwo, rest);
        const number = [
        //      0          1          2
        //   0  1  2    0  1  2    0  1  2
            [1, 2, 3], [4, 5, 6], [7, 8, 9]
        ];
        //const [,[,,seis]] = number
        //console.log(seis);
        const [list_1, list_2, list_3] = number;
        console.log(list_3[1]);
    
    }
    funcArray();
}
initCode();