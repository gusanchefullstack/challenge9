function init() {
  const numbersbuttons = document.querySelectorAll("#button-number");
  const operationButtons = document.querySelectorAll("#operator");
  const Equal = document.querySelector("#equal-button");
  const CE = document.querySelector("#CE-button");
  const C = document.querySelector("#C-button");

  let operand1 = 0;
  let operand2 = 0;
  let operation = "";
  let digits = "";
  let result = 0;

  const previewDisplay = document.querySelector("#view-operation");
  const boxNumber = document.querySelector("#box-numbers");
  boxNumber.innerText = "0";

  numbersbuttons.forEach((numberButton) => {
    numberButton.addEventListener("click", (evt) => {
      digits += evt.target.innerText;
      console.log(`Digits: ${digits}`);
      boxNumber.innerText = digits;
    });
  });
  operationButtons.forEach((opButton) => {
    opButton.addEventListener("click", (evt) => {
      operand1 = parseInt(digits);
      digits = "";
      operation = opButton.innerText;
      previsualizarOperacion(operand1, operand2, operation, previewDisplay);
    });
  });
  Equal.addEventListener("click", (evt) => {
    operand2 = parseInt(digits);
    result = executeOperation(operation, operand1, operand2);
    previsualizarOperacion(operand1, operand2, operation, previewDisplay);
    console.log(`Resultado: ${result}`);
    boxNumber.innerText = result;
  });
}

function executeOperation(op, op1, op2) {
  result = 0;
  switch (op) {
    case "+":
      result = sum(op1, op2);
      break;
    case "-":
      result = dif(op1, op2);
      break;
    case "x":
      result = mult(op1, op2);
      break;
    case "/":
      result = div(op1, op2);
      break;
    default:
      break;
  }
  return result;
}

function previsualizarOperacion(operand1, operand2, operationText, display) {
  console.log(`Operand1: ${operand1}`);
    console.log(`Operand2: ${operand2}`);
    console.log(`Operation: ${operationText}`);
  display.innerText = `${operand1} ${operationText} ${operand2?operand2:""}`;

}

function sum(a, b) {
  return a + b;
}
function dif(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
