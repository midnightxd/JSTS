//Funções recursivas 

recursive = (max) => {
    range = (minR = 100, maxR = 999) => {
        const rand = Math.random() * (maxR - minR) + minR;
        const array = [rand.toFixed(0)];
        console.log(array);
    };
    range();
    if (max >= 5) return;
    max++;
    recursive(max);
}
recursive(0); 
