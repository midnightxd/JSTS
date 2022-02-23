//Funções geradoras

function* generete () {
    //
    yield 'Value 1';
    yield 'Value 2';
    yield 'Value 3';
}

function* generete_ () {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g1 = generete();
for (let value of g1) {
    console.log(value);
}
console.log('\n#######');

const g2 = generete_();

for (let i = 1; i <= 5; i++) {
    console.log(g2.next().value);
}
console.log('#######\n');

function* generete3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* generete4 () {
    yield* generete3();
    yield 3;
    yield 4;
}

const g4 = generete4();
for (let index of g4) {
    console.log(index);
}

function* generete5 () {
    yield function () {
        console.log('Yield 1: --');
    };
    // . . . 
    yield function () {
        console.log('Yiled 2: ---')
    }
}
const g5 = generete5();
const function1 = g5.next().value;
const function2 = g5.next().value;
function1();
function2();
