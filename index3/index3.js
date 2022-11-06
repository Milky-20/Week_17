function formatDate(date) {
    let diff = new Date - date;
    // console.log(diff);
    if (diff < 1000 ){
        return 'Прямо сейчас';
    }
    let seconds = diff / 1000;
    if (seconds < 60){
        return seconds + ' секунд назад';
    }
    let minutes = seconds / 60;
    if (minutes < 60){
        return minutes + ' минут назад';
    }
    let hour = minutes / 60;
    if (hour < 24 * 60){
        return hour + ' часа назад';
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 27 * 60 * 1000)) ); // "27 мин. назад"

alert( formatDate(new Date(new Date - 86400* 1 * 1000)) ); // "24 часа назад"