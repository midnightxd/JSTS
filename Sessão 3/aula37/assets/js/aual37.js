//Aule de NodeList (exercicio)

function main () {
    function createParagrph () {
        const paragraph = document.querySelector('.paragraph');
        const ps = paragraph.querySelectorAll('p');
        
        const styleBodyColor = getComputedStyle(document.body);
        const backgroundBodyColor = styleBodyColor.backgroundColor;
        
        const textColor = '#FFF';
        
        for (let i = 0; i < ps.length; i++) {
            ps[i].style.backgroundColor = backgroundBodyColor;
            ps[i].style.color = textColor;
        }
    }
    createParagrph();
}
main();
