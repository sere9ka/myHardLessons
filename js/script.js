// 1) Используя функцию-конструктор DomElement из основного задания №1, создать квадрат 100 на 100 пикселей. Ему необходимо задать фон(background) любого цвета и свойство position: absolute.

// 2) Поместить его на страницу только после выполнения события DOMContentLoaded. Внутри тега body должно быть только подключение скрипта. (В случае подключения файла скрипта к странице перед закрывающим тэгом body)

// 3) Написать обработчик события для keydown, который будет принимать callback-функцию. Данная функция будет отлавливать нажатие на стрелки клавиатуры. В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз) наш квадрат будет перемещаться на 10 пикселей при каждом нажатии.


'use strict'

const DomElement = function (selectorClass, height, width, bg, fontSize) {
    this.selectorClass = selectorClass,
        this.height = height,
        this.width = width,
        this.bg = bg,
        this.fontSize = fontSize
}

DomElement.prototype.createNewElement = function () {
    const newDiv = document.createElement('div');
    const newP = document.createElement('p');
    const selectorArr = this.selectorClass.slice();
    const divClass = selectorArr.slice(1)
    const selector = selectorArr[0];
    const getElement = function () {
        if (selector == '.') {
            newDiv.classList.add(divClass);
            return newDiv;
        } else if (selector == '#') {
            newP.setAttribute('id', divClass);
            return newP;
        }
    }
    const newElement = getElement()

    if (newElement == newDiv) {
        newElement.style.position = 'absolute';
        newElement.style.height = this.height;
        newElement.style.width = this.width;
        newElement.style.background = this.bg;
        newElement.style.fontSize = this.fontSize;
        newElement.style.top = 0 + 'px'
        newElement.style.left = 0 + 'px'


        document.body.append(newElement)
    } else if (newElement == newP) {
        newElement.style.cssText = this.height + this.width + this.bg + this.fontSize
        newElement.style.top = 0
        document.body.append(newElement)
    }

    // this.bg + this.fontSize + 'top: 20px;' + 'left: 20px;'
    console.dir(newElement);
}
const BlockElement1 = new DomElement('.block', '100px', '100px', 'red', '18px')

const goToPlay = function (event) {
    const square = document.querySelector('div');
    let top = +square.style.top.slice(0, -2)
    let left = +square.style.left.slice(0, -2)
    switch (event.key) {
        case "ArrowLeft":
            square.style.left = (left - 10) + 'px'
            break;
        case "ArrowRight":
            square.style.left = (left + 10) + 'px'
            break;
        case "ArrowUp":
            square.style.top = (top - 10) + 'px'
            break;
        case "ArrowDown":
            square.style.top = (top + 10) + 'px'
            break;
    }
}


document.addEventListener("DOMContentLoaded", BlockElement1.createNewElement());
document.addEventListener('keydown', goToPlay)
