function solve() {

  const validNamingConventions = ["Pascal Case", "Camel Case"];
  const TextInputElement = document.querySelector('#text');
  const namingConventionElement = document.querySelector('#naming-convention');

  const resultElement = document.querySelector('.result-container #result');

  if(!validNamingConventions.includes(namingConventionElement.value)){
    resultElement.textContent = 'Error!';
    return;
  }

  const pascalText = TextInputElement.value.toLowerCase()
  .split(" ")
  .map((x)=>x[0].toUpperCase() + x.slice(1))
  .join('');

  
  resultElement.textContent = namingConventionElement.value === 'Pascal Case' ? pascalText : pascalText[0].toLowerCase() + pascalText.slice(1);
}