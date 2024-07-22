function extractText() {
    const ulElement = document.getElementById('items');
    const resultElement = document.getElementById('result');

    const textResult = ulElement.textContent.split('\n').map(x => x.trim()).join('\n');

    resultElement.textContent = textResult;
}