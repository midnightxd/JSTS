// Aula 38 While e Do While

function main () {
    function repeat () {
        let count = 0;
        while (count <= 5) {
            console.log(count);
            count++;
        }
    }
    // generete a number random
    function random (min, max) {
        const random_ = Math.random() * (max - min) + min;
        return Math.floor(random_);
    }
    const min = 1;
    const max = 50;
    let rand = random(min, max);
    /*
    while (rand !== 10) {
        rand = random(min, max);
        console.log(rand)
    }
    */
    console.log('############')
    // division
    do {
        rand = random(min, max);
        console.log(rand);
    } while (rand !== 10);

    //call functions
    random();
    //repeat();
}
main();
