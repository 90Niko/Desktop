function attachEventsListeners() {


    const secondsToMinutes = (seconds) => seconds / 60;
    const secondsToHours = (seconds) => secondsToMinutes(seconds) / 60;
    const secondsToDays = (seconds) => secondsToHours(seconds) / 24;

    const minutesToSeconds = (minutes) => minutes * 60;
    const minutesToHours = (minutes) => minutes / 60;
    const minutesToDays = (minutes) => minutesToHours(minutes) / 24;



    function onclickHAndler(event) {

        const id = event.target.getAttribute('id');
        const inputId = id.replace('Btn', '');

        const inputEL = document.querySelector(`input#${inputId}`)

        switch (inputId) {
            case 'seconds': {
                document.getElementById('days').value = secondsToDays(inputEL.value);
                document.getElementById('hours').value = secondsToHours(inputEL.value);
                document.getElementById('minutes').value =secondsToMinutes(inputEL.value);

            } break;
            case 'minutes': {
                document.getElementById('days').value = minutesToDays(inputEL.value);
                document.getElementById('hours').value = minutesToHours(inputEL.value);
                document.getElementById('seconds').value = minutesToSeconds(inputEL.value);

            } break;
            case 'hours': {

            } break;
            case 'days': {

            } break;
        }
    }

    document.querySelectorAll("input[type=button]").forEach((buttonEl) => {

        buttonEl.addEventListener('click', onclickHAndler);

    })
}