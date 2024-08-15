const baseUrl = "http://localhost:3030/jsonstore/gifts";

//Buttons
const loadPresentBtn = document.getElementById('load-presents');
const addBtn = document.getElementById('add-present');
const editBtn = document.getElementById('edit-present');

//Gift Container
const giftList = document.getElementById('gift-list');

//Input Element
const presentInput = document.getElementById('gift');
const forInput = document.getElementById('for');
const priceInput = document.getElementById('price');

//Load Present
loadPresentBtn.addEventListener('click', loadAllData);


//Load All Data
async function loadAllData() {
    giftList.innerHTML = '';
    fetch(baseUrl)
        .then(response => response.json())
        .then(res => {

            const allGifts = Object.values(res);
            for (const gift of allGifts) {


                const currId = gift._id;

                const divElContent = document.createElement('div');
                divElContent.classList.add('content');

                const buttonCOntainer = document.createElement('div');
                buttonCOntainer.classList.add('buttons-container');

                const changeBtn = document.createElement('button');
                changeBtn.classList.add('change-btn');
                changeBtn.textContent = 'Change';
                changeBtn.addEventListener('click', () => {

                    presentInput.value = gift.gift;
                    forInput.value = gift.for;
                    priceInput.value = gift.price;

                    editBtn.removeAttribute('disabled');
                    addBtn.setAttribute('disabled', 'disabled');

                    giftList.setAttribute('data-game-id', gift._id);


                })


                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('delete-btn');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', async () => {

                    fetch(`${baseUrl}/${currId}`, {
                        method: 'DELETE',

                    });

                    await loadAllData();

                })

                buttonCOntainer.appendChild(changeBtn);
                buttonCOntainer.appendChild(deleteBtn);

                const divSocksEl = document.createElement('div');
                divSocksEl.classList.add('gift-sock');

                const pGiftEl = document.createElement('p');
                pGiftEl.textContent = gift.gift;

                const pFortEl = document.createElement('p');
                pFortEl.textContent = gift.for;


                const pPricetEl = document.createElement('p');
                pPricetEl.textContent = gift.price;

                divElContent.appendChild(pGiftEl);
                divElContent.appendChild(pFortEl);
                divElContent.appendChild(pPricetEl);

                divSocksEl.appendChild(divElContent);
                divSocksEl.appendChild(buttonCOntainer);

                giftList.appendChild(divSocksEl);

            }

        })

};

//Add Gift
addBtn.addEventListener('click', async () => {

    const present = presentInput.value;
    const forName = forInput.value;
    const price = priceInput.value;

    clearInputs();

    if (!present || !forName || !price) {
        return;
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'appliaction/json'
        },
        body: JSON.stringify({

            gift: present,
            for: forName,
            price: price
        })

    })

    loadAllData();

});

//Delete Gift
editBtn.addEventListener('click', async () => {

    const giftId = giftList.getAttribute('data-game-id');

   
    await fetch(`${baseUrl}/${giftId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gift: presentInput.value, for: forInput.value, price: priceInput.value, _id: giftId }),
    });


    addBtn.removeAttribute('disabled');
    editBtn.setAttribute('disabled', 'disabled');
    clearInputs();

    giftList.remove('data-game-id');

    await loadAllData();

})

function clearInputs() {
    presentInput.value = '';
    forInput.value = '';
    priceInput.value = '';
}