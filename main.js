function init() {
let bottonOne = document.querySelector('#button1');
const bottonTwo = document.querySelector('#button2');
const bottonThree = document.querySelector('#button3');
const bottonFour = document.querySelector('#button4');
const bottonFive = document.querySelector('#button5');
const bottonSix = document.querySelector('#button6');
const bottonSeven = document.querySelector('#button7');
const bottonEight = document.querySelector('#button8');
const bottonNine = document.querySelector('#button9');
const bottonCero = document.querySelector('#button0');
const suma = document.querySelector('#mas-button');
const resta = document.querySelector('#menos-button');
const multiplcacion = document.querySelector('#x-button');
const division = document.querySelector('#divisor-button');
const porcentaje = document.querySelector('#porcentaje-button');
const num = document.querySelector('#box-numbers');
const igual = document.querySelector('#equal-button');
const C = document.querySelector('#C-button');
const CE = document.querySelector('#CE-button');
let numero1;
let numero2;
let operation;
let borrarDigito = document.querySelector('#flecha-button');



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
  console.log(numero1);

}


division.onclick = function(event13) {
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "/";
}

igual.onclick = function(event14) {
  numero2 = parseInt(num.innerHTML);
  console.log(numero2);
  resolver(); 
}



C.onclick = function(event15) {
  num.innerHTML = '';
}

CE.onclick = function(event16) {
  num.innerHTML = '';
  numero2 = parseInt(num.innerHTML);
}

porcentaje.onclick = function(event17) {
  numero2 = parseInt(num.innerHTML) / 100;
  numeroEnporcentaje();
  console.log(numero2);
}

borrarDigito.onclick = function(event18) {
  num.slice(1, -2);
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
    
  } else  {
    result = numero1 / numero2;
    num.innerHTML = result;
  }

}


function numeroEnporcentaje() {
  let result;
  result = numero1 * numero2;
  num.innerHTML = result;
}

}

