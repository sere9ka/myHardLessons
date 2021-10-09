
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let allDays = document.querySelector('.days');
let momentDay = new Date();
let day = momentDay.getDay() - 1;

const getDate = function () {
    
    week.forEach(function (item, i) {
        let newDiv = document.createElement('div');
        if (i == 5 && i == day || i == 6 && i == day) {
            newDiv.classList.add('day-item', 'italic', 'bold');
            newDiv.innerHTML = item;
            allDays.appendChild(newDiv)
        } else if (i == 5 || i == 6) {
            newDiv.classList.add('day-item', 'italic');
            newDiv.innerHTML = item;
            allDays.appendChild(newDiv)
        } else if (i == day) {
            newDiv.classList.add('day-item', 'bold');
            newDiv.innerHTML = item;
            allDays.appendChild(newDiv)
        } else {
            newDiv.classList.add('day-item');
            newDiv.innerHTML = item;
            allDays.appendChild(newDiv)
        }
    });
    
}
getDate();
console.log(day);