function init() {
let bottonOne = document.querySelector('#button1');
bottonOne.value = 1;
const bottonTwo = document.querySelector('#button2');
//bottonTwo.value = 2;
const bottonThree = document.querySelector('#button3');
//bottonThree.value = 3;
const bottonFour = document.querySelector('#button4');
//bottonFour.value = 4;
const bottonFive = document.querySelector('#button5');
//bottonFive.value = 5;
const bottonSix = document.querySelector('#button6');
//bottonSix.value = 6;
const bottonSeven = document.querySelector('#button7');
//bottonSeven.value = 7;
const bottonEight = document.querySelector('#button8');
//bottonEight.value = 8;
const bottonNine = document.querySelector('#button9');
//bottonNine.value = 9;
const bottonCero = document.querySelector('#button0');
//bottonCero.value = 0;
const suma = document.querySelector('#mas-button');
const num1 = document.querySelector('#box-numbers');
const numero1 = 0;


bottonOne.onclick = function(event1) {
  num1.innerHTML +=bottonOne.value;

}

bottonTwo.onclick = function(event2) {
  num1.innerHTML +=bottonTwo.value;
}

bottonThree.onclick = function(event3) {
  num1.innerHTML +=bottonThree.value;
}
bottonFour.onclick = function(event4) {
  num1.innerHTML +=bottonFour.value;
}
bottonFive.onclick = function(event5) {
  num1.innerHTML +=bottonFive.value;
}
bottonSix.onclick = function(event6) {
  num1.innerHTML +=bottonSix.value;
}
bottonSeven.onclick = function(event7) {
  num1.innerHTML +=bottonSeven.value;
}
bottonEight.onclick = function(event8) {
  num1.innerHTML +=bottonEight.value;
}
bottonNine.onclick = function(event9) {
  num1.innerHTML +=bottonNine.value;
}

bottonCero.onclick = function(event9) {
  num1.innerHTML +=bottonCero.value;
}

suma.onclick = function(event10) {
  numero1 = num1.textContent;
}
}
