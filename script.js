'use stricts'

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let allDays = document.querySelector('.days');
let newDiv = document.createElement('div');
let newDiv2 = document.createElement('div');
let momentDay = new Date();
let optionsLong = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC'
};
let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
};
let optionsTime = {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

let wordHour;
let wordMin;
let wordSec;

const getHourRules = function () {
    if (momentDay.getHours() === 1 || momentDay.getHours() === 21) {
        return wordHour = ' час '
    } else if (momentDay.getHours() > 1 && momentDay.getHours() < 5 || momentDay.getHours() > 21 && momentDay.getHours() <= 24) {
        return wordHour = ' часа '
    } else {
        return wordHour = ' часов '
    }
}

const getMinRules = function () {
    let momentMinut = momentDay.getMinutes();

    if (momentMinut == 1 || momentMinut.splice(0, 1) == 1) {
        return wordMin = ' минута '
    } else {
        return wordMin = ' минут '
    }
}

const getSecRules = function () {
    let momentSecond = momentDay.getSeconds();

    if (momentSecond[0] == 1 || momentSecond[1] == 1) {
        return wordSec = ' секунда '
    } else {
        return wordMin = ' секунд '
    };
}

const getNullAdd = function (param) {
    if (param < 10) {
        return '0' + param;
    } else {
        return param
    }
}

const getDayLong = function () {
    momentDay = new Date();

    newDiv.classList.add('day-item');
    newDiv.innerHTML = "Сегодня " + momentDay.toLocaleString("ru", optionsLong) + ', ' + momentDay.getHours() + getHourRules() + momentDay.getMinutes() + getMinRules() + momentDay.getSeconds() + getSecRules();

    newDiv2.classList.add('day-item');
    newDiv2.innerHTML = momentDay.toLocaleString("ru", options) + ' - ' + getNullAdd(momentDay.getHours()) + ':' + getNullAdd(momentDay.getMinutes()) + ':' + getNullAdd(momentDay.getSeconds());

    allDays.append(newDiv, newDiv2);
};

getDayLong();

setInterval(getDayLong, 1000);