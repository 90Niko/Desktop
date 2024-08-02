function solve() {

  const [generateButton, buyButton] = document.querySelectorAll('button');
  const [inputTextArea, outputTextArea] = document.querySelectorAll('textarea');

  const tBodyEl = document.querySelector('tbody');
  const firstTrEl = tBodyEl.querySelector('tr');

  function onGenerateBtn() {

    const inputData = JSON.parse(inputTextArea.value);

    inputData.forEach(({ img, name, price, decFactor }) => {

      const currentClone = firstTrEl.cloneNode(true);

      currentClone.children[0].children[0].setAttribute('src', img)

      currentClone.children[1].children[0].textContent = name;

      currentClone.children[2].children[0].textContent = price;

      currentClone.children[3].children[0].textContent = decFactor;

      const checkBoxEl = currentClone.children[4].children[0];
      checkBoxEl.disabled = false;
      checkBoxEl.setAttribute("name", name);
      checkBoxEl.setAttribute("price", price);
      checkBoxEl.setAttribute("decFactor", decFactor);


      tBodyEl.appendChild(currentClone);

    })
  }

  function onBtnClickHandler() {

    const allChecked = [...document.querySelectorAll("input[type='checkbox']"),
    ].filter((inputEl) => inputEl.checked).reduce((acc, currInputEl) => {


      const name = currInputEl.getAttribute("name");
      const price = currInputEl.getAttribute("price");
      const decFactor = currInputEl.getAttribute("decFactor");

      acc.names.push(name);
      acc.totalPrice += Number(price);
      acc.avgDecFactor += Number(decFactor);

      return acc;
    }, { names: [], totalPrice: 0, avgDecFactor: 0 });

    console.log(allChecked);

    outputTextArea.value = `
    Bought furniture: ${allChecked.names.join(", ")}
    Total Price: ${allChecked.totalPrice.toFixed(2)}
    Average Decoration: ${allChecked.avgDecFactor / allChecked.names.length}
    `
  }

  generateButton.addEventListener('click', onGenerateBtn);
  buyButton.addEventListener('click', onBtnClickHandler);
}