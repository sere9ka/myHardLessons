let lang = prompt('Какой язык включён?', 'ru или en');

if (lang === 'ru') {
    console.log("if: Значит лови на русском: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
} else if (lang ==='en') {
    console.log("if: So catch in English: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else console.log("if: Че за язык ты написал???? О_о");

switch (true){
    case lang === 'ru':
        console.log("Switch: Значит лови на русском: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
        break 
    case lang === 'en':
        console.log("Switch: So catch in English: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break
    default:
        console.log('Switch: Это ещё что за язык то?');
}


lang === 'ru' ? console.log("жесть: Значит лови на русском: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье") : lang === 'en' ? console.log("жесть: So catch in English: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday") : console.log('жесть: Это ещё что за язык то?');