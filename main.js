let str = prompt("Введите любую строку!", " Введите любую строку! ")

const getStrClip = function (string) {
    if (string === null) {
        return "Вы ничего не ввели!"
    } else if (string == '') {
        return "Вы ввели не строку, а непонятно что!"
    } else if (string == string*1) {
        return "Вы ввели не строку, а число!"
    } else {
        let stringOneSpace = str.trim();
        if (stringOneSpace.length > 29) {
            let stringShort = stringOneSpace.slice(0, 29) + "...";
            return stringShort;
        } else {
            return stringOneSpace;
        }
    }
}


console.log(getStrClip(str));
