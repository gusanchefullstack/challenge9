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
const operation1 = document.querySelector('#operartion1');
const operator1 = document.querySelector('#operator1');
const operation2 = document.querySelector('#operartion2');
let numero1;
let numero2;
let operation;
let borrarDigito = document.querySelector('#flecha-button');

let numero2Array;



//Eventos
bottonOne.onclick = function(event1) {
  
  num.innerHTML +=bottonOne.value;
  operation1.innerHTML = num.innerHTML;
  
  

}

bottonTwo.onclick = function(event2) {
  num.innerHTML +=bottonTwo.value;
  operation1.innerHTML = num.innerHTML;
}

bottonThree.onclick = function(event3) {
  num.innerHTML +=bottonThree.value;
  operation1.innerHTML = num.innerHTML;
}
bottonFour.onclick = function(event4) {
  num.innerHTML +=bottonFour.value;
  operation1.innerHTML = num.innerHTML;
}
bottonFive.onclick = function(event5) {
  num.innerHTML +=bottonFive.value;
  operation1.innerHTML = num.innerHTML;
}
bottonSix.onclick = function(event6) {
  num.innerHTML +=bottonSix.value;
  operation1.innerHTML = num.innerHTML;
}
bottonSeven.onclick = function(event7) {
  num.innerHTML +=bottonSeven.value;
  operation1.innerHTML = num.innerHTML;
}
bottonEight.onclick = function(event8) {
  num.innerHTML +=bottonEight.value;
  operation1.innerHTML = num.innerHTML;
}
bottonNine.onclick = function(event9) {
  num.innerHTML +=bottonNine.value;
  operation1.innerHTML = num.innerHTML;
}

bottonCero.onclick = function(event9) {
  num.innerHTML +=bottonCero.value;
  operation1.innerHTML = num.innerHTML;
}

suma.onclick = function(event10) {
  operator1.innerHTML = '+';
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "+";
}

resta.onclick = function(event11) {
  operator1.innerHTML = '-';
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "-";
}

multiplcacion.onclick = function(event12) {
  operator1.innerHTML = 'x';
  numero1 = parseInt(num.innerHTML);
  num.innerHTML = '';
  operation = "*";
  console.log(numero1);

}


division.onclick = function(event13) {
  operator1.innerHTML = '/';
  numero1 = parseInt(num.innerHTML);
  
  num.innerHTML = '';
  
  operation = "/";
}

igual.onclick = function(event14) {
  numero2 = parseInt(num.innerHTML);
  operation2 = num.innerHTML;
  console.log(operation2);
  resolver(); 
}



C.onclick = function(event15) {
  num.innerHTML = '';
  operation1.innerHTML = num.innerHTML;
}

CE.onclick = function(event16) {
  num.innerHTML = '';
  numero2 = parseInt(num.innerHTML);
  operation1.innerHTML = num.innerHTML;
}

porcentaje.onclick = function(event17) {
  numero2 = parseInt(num.innerHTML) / 100;
  numeroEnporcentaje();
  console.log(numero2);
}

borrarDigito.onclick = function(event18) {
  numeroString();
}

// Funciones

function resolver() {
  let result;

  if (operation === "+") {
    
    result = numero1 + numero2;
    
    num.innerHTML = result;
    operation2.innerHTML = num.innerHTML;
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

function numeroString() {
  let numero1String;
  numero1 = num.value;
numero1String = num.substring(0, value.length -1);

}

}

