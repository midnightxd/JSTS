initEscopo = () => {
    addZeroLeft = (num) => {
        return num >= 10 ? num : `0${num}`;
    }
    getDayWeek = (dayWeek) => {
        let dayWeektext;
        switch (dayWeek) {
            case 0:
                dayWeektext = 'Domingo';
                return dayWeektext;
            case 1:
                dayWeektext = 'Segunda';
                return dayWeektext;
            case 2:
                dayWeektext = 'Terça-Feira';
                return dayWeektext;
            case 3:
                dayWeektext = 'Quarta-Feira';
                return dayWeektext;
            case 4:
                dayWeektext = 'Quinta-Feira';
                return dayWeektext;
            case 5:
                dayWeektext = 'Sexta-Feira';
                return dayWeektext;
            case 6:
                dayWeektext = 'Sabádo';
                return dayWeektext;
            default:
                dayWeektext = '';
        }
    }
    mostrarData = (data) => {
        const day = addZeroLeft(data.getDate());
        const month = addZeroLeft(data.getMonth() + 1);
        const year = addZeroLeft(data.getFullYear());
        const hours = addZeroLeft(data.getHours());
        const min = addZeroLeft(data.getMinutes());
        const seg = addZeroLeft(data.getSeconds());
        
        const dayWeek = data.getDay();
        const dayWeektext = getDayWeek(dayWeek);
        msg = `[${dayWeektext} ${day}/${month}/${year} - ${hours}:${min}:${seg}]`;
        return msg;
    }
    const data = new Date();
    const localDate = mostrarData(data);
    console.log(localDate);
}
initEscopo();