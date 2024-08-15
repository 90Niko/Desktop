window.addEventListener("load", solve);

function solve() {


    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    const currentTaskUlElement = document.getElementById('task-list');
    const doneTaskUlElement = document.getElementById('done-list');

    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', (e) => {

        e.preventDefault();

        //Attach the inputs element
        const placeElement = document.createElement('p');
        placeElement.textContent = placeInputElement.value;

        const actionElement = document.createElement('p');
        actionElement.textContent = actionInputElement.value;

        const personElement = document.createElement('p');
        personElement.textContent = personInputElement.value;

        if (!placeInputElement.value || !actionInputElement.value || !personInputElement.value) {

            return;
        }

        //Create article and add paragraph element
        const articleElement = document.createElement('article');

        articleElement.appendChild(placeElement);
        articleElement.appendChild(actionElement);
        articleElement.appendChild(personElement);

        //Create button container and add buttons
        const divContainer = document.createElement('div');
        divContainer.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click',()=>{

            placeInputElement.value = placeElement.textContent;
            actionInputElement.value = actionElement.textContent;
            personInputElement.value = personElement.textContent;

            currentTaskUlElement.remove(liElement);

        })


        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => {

            doneTaskUlElement.appendChild(liElement);
            editBtn.remove();
            doneBtn.remove();

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
            liElement.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', () => {

                liElement.remove();
            })
        })

        divContainer.appendChild(editBtn);
        divContainer.appendChild(doneBtn);

        //create li element and add paragraphs and buttons
        const liElement = document.createElement('li');

        liElement.classList.add('clean-task');
        liElement.appendChild(articleElement);
        liElement.appendChild(divContainer);

        currentTaskUlElement.appendChild(liElement);

        clearInputs();

    })

    function clearInputs() {
        placeInputElement.value = "";
        actionInputElement.value = "";
        personInputElement.value = "";
    }
}