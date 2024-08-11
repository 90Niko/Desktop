function attachEvents() {

    const baseUrl = "http://localhost:3030/jsonstore/messenger";

    const textAreaElement = document.getElementById('messages');

    const [auhtorNameElement, contentElement] = document.querySelectorAll('input[type=text]');

    const btnSubmit = document.getElementById('submit');
    const btnRefresh = document.getElementById('refresh');

    btnSubmit.addEventListener('click', () => {

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplicationjson'
            },
            body: JSON.stringify({

                author: auhtorNameElement.value,
                content: contentElement.value

            })

        })
            .then(res => res.json())
            .then(res => console.log(res));

        auhtorNameElement.value = "";
        contentElement.value = "";

    });

    btnRefresh.addEventListener('click', () => {

        textAreaElement.value = '';
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                textAreaElement.value = Object.values(result)
                    .map(({ author, content }) => `${author}: ${content}`)
                    .join("\n");
            });

        textAreaElement.value = "";
    })
}

attachEvents();