function sumTable() {

//     const result = document.getElementById('sum');

//     const rows = document.querySelectorAll('table tbody tr');

//     let sum = 0;

//    for (const iterator of rows) {
    
//     const secondElement = iterator.children[1];

//     if(secondElement.tagName === 'TD') {
//         sum += Number(secondElement.textContent);
//     }   
//    }
//         result.textContent = sum;

const tdElements = Array.from(document.querySelectorAll('table tr td:nth-child(2)'));
const result = document.getElementById('sum');

result.textContent = tdElements.map(x => Number(x.textContent)).reduce((a, b) => a + b, 0);

}