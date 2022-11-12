function init() {
const bottonOne = document.getElementsByClassName('1-button');
bottonOne.value = 1;
const bottonTwo = document.getElementsByClassName('2-button');
//bottonTwo.value = 2;
const bottonThree = document.getElementsByClassName('3-button');
//bottonThree.value = 3;
const bottonFour = document.getElementsByClassName('4-button');
//bottonFour.value = 4;
const bottonFive = document.getElementsByClassName('5-button');
//bottonFive.value = 5;
const bottonSix = document.getElementsByClassName('6-button');
//bottonSix.value = 6;
const bottonSeven = document.getElementsByClassName('7-button');
//bottonSeven.value = 7;
const bottonEight = document.getElementsByClassName('8-button');
//bottonEight.value = 8;
const bottonNine = document.getElementsByClassName('9-button');
//bottonNine.value = 9;
const bottonCero = document.getElementsByClassName('0-button');
//bottonCero.value = 0;
const screen = document.getElementsByClassName('operations-container');

console.log(bottonOne);

bottonOne.onclick = function(event) {
  screen.textContent = bottonOne.value;
}
console.log(screen);
}


















