function solve() {
  
  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(s => s.length > 0);
  let output = document.getElementById('output');

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraph = sentences.slice(i, i + 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = paragraph;
    output.appendChild(p);
  }
}