function calc() {
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const sumElement = document.getElementById('sum');

const num1 = Number(num1Element.value);
const num2 = Number(num2Element.value);

sumElement.value = num1 + num2;
}
