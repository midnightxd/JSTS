//Operação termária
// (condição) ? (valor para verdadeiro) : (valor para falso)

function stateUserPoints () {
    
    const userPoints = 999;

    /*
    if (userPoints >= 1000) {
        console.log('Usuario vip');
    } else {
        console.log('Usuario não vip');
    }
    */

    const userLevel = userPoints >= 1000 ? 'Usuario vip' : 'Usuario normal';
    console.log(userLevel);
}
stateUserPoints();
