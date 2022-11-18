function init() {
  const numbersbuttons = document.querySelectorAll('#button-number');
  const operationButtons = document.querySelectorAll('#operator');
  const Equal = document.querySelector('#equal-button');
  const CE = document.querySelector('#CE-button');
  const C = document.querySelector('#C-button');
  const previewOperation = document.querySelector('#view-operartion');
  const boxNumber = document.querySelector('#box-numbers');
  let numbers = [];
  let number1;
  let resultado = 0;

numbersbuttons.forEach(button => {
  button.onclick = function(event1) {
   
      boxNumber.innerText +=button.innerText;
  
  } 
 });
  
operationButtons.forEach(button => {
  button.onclick = function(event2) {
    numbers.push(boxNumber.innerText);
    number1 = parseInt(numbers[0]);
    boxNumber.innerText = '';
    acumular(number1);
    numbers.shift();
    previewOperation.innerText = resultado + "+";
   
    //boxNumber.innerText =resultado;
    console.log(resultado);
 
  
    function acumular() {
      resultado +=number1;
  
    }
   
  } 
  
}); 


 
  /*C.onclick = function(event3) {
    numbers[0],numbers[1] = boxNumber.innerText = '0';
  }

  CE.onclick = function(event4) {
    numbers[1] = boxNumber.innerText = '';
  }
*/

}
  


