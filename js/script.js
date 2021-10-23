'use strict'

const forBlocks = document.querySelector('.forblocks')
const inputOne = document.querySelector('.forblock1')
const inputTwo = document.querySelector('.forblock2')

inputOne.value = localStorage.textdiv;
inputTwo.value = localStorage.textp;


const DomElement = function (selectorClass, height, width, bg, fontSize) {
    this.selectorClass = selectorClass,
        this.height = 'height: ' + height + ';',
        this.width = 'width: ' + width + ';',
        this.bg = 'background: ' + bg + ';',
        this.fontSize = 'font-size: ' + fontSize + ';'
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
        newElement.style.cssText = this.height + this.width + this.bg + this.fontSize
        forBlocks.append(newElement)
    } else if (newElement == newP) {
        newElement.style.cssText = this.height + this.width + this.bg + this.fontSize
        forBlocks.append(newElement)
    }
}
const BlockElement1 = new DomElement('.block', '120px', '150px', 'red', '18px')
const BlockElement2 = new DomElement('#block', '120px', '150px', 'green', '28px')

const editElement = function () {
    const elementDiv = forBlocks.querySelector('div')
    const elementP = forBlocks.querySelector('p')

    elementDiv.textContent = inputOne.value
    elementP.textContent = inputTwo.value

    localStorage.textdiv = elementDiv.textContent
    localStorage.textp = elementP.textContent

}

inputOne.addEventListener('input', editElement)
inputTwo.addEventListener('input', editElement)

BlockElement1.createNewElement()
BlockElement2.createNewElement()

editElement()