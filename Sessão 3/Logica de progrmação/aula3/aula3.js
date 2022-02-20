/*
    Avaliação de curto-circuito (short-circuit)
    && -> false && -> true -> false (O valor mesmo)
    || ->

    FALSY
    false (o valor literal)
    0
    '' `` ""
    null / undefined
    NaN
*/

//&&
/*
falaOi = () => 'Oi';
let vaiExecutar;
console.log(vaiExecutar && falaOi());
*/

// ||
const corLight = null; // set cor background
const corDefault = 'DarkGrey';
console.log(corLight || corDefault);