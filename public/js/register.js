const form = document.querySelector('form');
const password = document.querySelector('#password')
const confirmPassInput = document.querySelector('#confirmPassoword');
const passwordLenghtEl = document.querySelector('#password-length');
const confirmPassErrorEL = document.querySelector('#confirmPassowordError');


form.addEventListener('submit', (e) => {
    if (password.value.length < 6 || password.value.length > 20) {
        e.preventDefault();
        passwordLenghtEl.classList.add('active');
        passwordLenghtEl.innerText = 'Select a password between 6 and 20 characters long!';
    }

    if (password.value.trim() !== confirmPassInput.value.trim()) {
        e.preventDefault();
        confirmPassErrorEL.classList.add('active');
        confirmPassErrorEL.innerHTML = "Password Not Match"
    }

});
