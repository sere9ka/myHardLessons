
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let allDays = document.querySelector('.days');
let momentDay = new Date();
let day;

const getDate = function () {
    
    week.forEach(function (item) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('day-item');
        newDiv.innerHTML = item;
        allDays.appendChild(newDiv)
    });
    
}
getDate();