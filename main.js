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
const resta = document.querySelector('#menos-button');
const multiplcacion = document.querySelector('#x-button');
const division = document.querySelector('#divisor-button');
const num = document.querySelector('#box-numbers');
const igual = document.querySelector('#equal-button');
const C = document.querySelector('#C-button');
const CE = document.querySelector('#CE-button');
let numero1;
let numero2;
let operation;


//Eventos
bottonOne.onclick = function(event1) {
  num.innerHTML +=bottonOne.value;

}

bottonTwo.onclick = function(event2) {
  num.innerHTML +=bottonTwo.value;
}

bottonThree.onclick = function(event3) {
  num.innerHTML +=bottonThree.value;
}
bottonFour.onclick = function(event4) {
  num.innerHTML +=bottonFour.value;
}
bottonFive.onclick = function(event5) {
  num.innerHTML +=bottonFive.value;
}
bottonSix.onclick = function(event6) {
  num.innerHTML +=bottonSix.value;
}
bottonSeven.onclick = function(event7) {
  num.innerHTML +=bottonSeven.value;
}
bottonEight.onclick = function(event8) {
  num.innerHTML +=bottonEight.value;
}
bottonNine.onclick = function(event9) {
  num.innerHTML +=bottonNine.value;
}

bottonCero.onclick = function(event9) {
  num.innerHTML +=bottonCero.value;
}

suma.onclick = function(event10) {
  numero1 = parseInt(num.innerHTML);
  numero2 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "+";
}

resta.onclick = function(event11) {
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "-";
}

multiplcacion.onclick = function(event12) {
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "*";
}

division.onclick = function(event13) {
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "/";
}

igual.onclick = function(event14) {
  numero2 = parseInt(num.innerHTML);
  resolver(); 
}

C.onclick = function(event15) {
  num.innerHTML = '';
}

CE.onclick = function(event16) {
  num.innerHTML = '';
  numero2 = parseInt(num.innerHTML);
}

// Funciones

function resolver() {
  let result;

  if (operation === "+") {
    result = numero1 + numero2;
    num.innerHTML = result;
    
  } else if (operation === "-") {
    result = numero1 - numero2;
    num.innerHTML = result;
  } else if (operation === "*") {
    result = numero1 * numero2;
    num.innerHTML = result;
  } else {
    result = numero1 / numero2;
    num.innerHTML = result;
  }
}

}
