function passwordValidator(password) {

    function hasCorrectLength(pass) {
        const minLength = 6;
        const maxLength = 10;

       return pass.length >= minLength && pass.length <= maxLength;
    }

    function hasOnlyLettersAndDigits(pass) {
        const pattern = /^[A-Za-z0-9]+$/g;

        return pattern.test(pass);
    }

    function hasAtLeastTwoDigits(pass) {
        const pattern = /\d{2,}/g;

        return pattern.test(pass);
    }

    let isValid = true;

    if (!hasCorrectLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (!hasOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator("Pa$s$s")
passwordValidator("MyPass123")