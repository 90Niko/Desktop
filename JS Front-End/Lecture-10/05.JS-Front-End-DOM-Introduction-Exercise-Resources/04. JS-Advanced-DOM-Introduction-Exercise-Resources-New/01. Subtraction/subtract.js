function subtract() {
    const [firstInput,secondInput] = document.querySelectorAll("input[type='text']");

    const result = document.getElementById("result").textContent = (Number(firstInput.value) - Number(secondInput.value)).toFixed(2);
}