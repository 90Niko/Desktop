window.addEventListener("load", solve);

function solve() {
    //Inputs
    const inputExpense = document.getElementById('expense');
    const inputAmount = document.getElementById('amount');
    const inputDate = document.getElementById('date');

    //Ul Container
    const ulPreviewElement = document.getElementById('preview-list');
    const ulExspenseElement = document.getElementById('expenses-list');

    //Ul Container Delete Button
    const deleteBtn = document.querySelector('.delete');


    //Add Button
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => {

        if (!inputExpense.value || !inputAmount.value || !inputDate.value) {

            return;
        }

        //Create paragraph element
        const expsenseParagraph = document.createElement('p');
        expsenseParagraph.textContent = `Type: ${inputExpense.value}`;
        let expense = inputExpense.value;

        const amounteParagraph = document.createElement('p');
        amounteParagraph.textContent = `Amount: ${inputAmount.value}$`;
        let amount = inputAmount.value;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${inputDate.value}`;
        let date = inputDate.value;
       
        //Create button container
        const divContainer = document.createElement('div');
        divContainer.classList.add('buttons');

        //Create buttons
        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', "btn edit");
        editBtn.textContent = 'edit';

        const okBtn = document.createElement('button');
        okBtn.setAttribute('class', "btn ok");
        okBtn.textContent = 'ok';

        okBtn.addEventListener('click', () => {

            addBtn.removeAttribute('disabled');
            ulExspenseElement.appendChild(liElement);
            okBtn.remove();
            editBtn.remove();
            deleteBtn.addEventListener('click', () => {
                location.reload();
            })
        })


        editBtn.addEventListener('click', () => {
            inputExpense.value = expense;
            inputAmount.value = amount;
            inputDate.value = date;
            liElement.remove();
            addBtn.removeAttribute('disabled');

        })

        //Create article
        const article = document.createElement('article');

        //Create li element
        const liElement = document.createElement('li');
        liElement.classList.add('expense-item');

        article.appendChild(expsenseParagraph);
        article.appendChild(amounteParagraph);
        article.appendChild(dateParagraph);

        //Add buttons to the Container
        divContainer.appendChild(editBtn);
        divContainer.appendChild(okBtn);

        liElement.appendChild(article);
        liElement.appendChild(divContainer);

        ulPreviewElement.appendChild(liElement);

        clearInputs();

        addBtn.setAttribute('disabled', 'disabled');

    })

    function clearInputs() {
        inputExpense.value = "";
        inputAmount.value = "";
        inputDate.value = "";
    }
}