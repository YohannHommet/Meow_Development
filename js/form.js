const form = {

    nameInput: document.querySelector('#name'),
    emailInput: document.querySelector('#email'),
    messageInput: document.querySelector('#message'),
    errorMessage: document.querySelector('.js-errors'),
    submitFormButton: document.querySelector('.js-submitFormButton'),

    init: () => {

        form.nameInput.addEventListener('keyup', form.handleNameInput);
        form.emailInput.addEventListener('keyup', form.handleEmailInput);
        form.messageInput.addEventListener('keyup', form.handleMessageInput);
    },

    // Fonctions pour la vérification des input sur la page contact
    handleNameInput: () => {
        let nameValue = form.nameInput.value;

        if (nameValue.length < 3) {
            form.formValidation(form.nameInput, '1px #ff0073 solid', true, 'not-allowed', "* 3 characters min please.");
            return true;
        } else {
            form.formValidation(form.nameInput, '1px #555 solid', false, 'pointer');
            return false
        }
    },

    handleEmailInput: () => {
        let emailValue = form.emailInput.value;
        let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailTest = emailFormat.test(emailValue);

        if (emailTest === true) {
            form.formValidation(form.emailInput, '1px #555 solid', false, 'pointer');
            return true;
        } else {
            form.formValidation(form.emailInput, '1px #ff0073 solid', true, 'not-allowed', "* Email does not match requirements");
            return false;
        }
    },

    handleMessageInput: () => {
        let messageValue = form.messageInput.value;

        if (messageValue.length < 6) {
            form.formValidation(form.messageInput, '1px #ff0073 solid', true, 'not-allowed', "* 6 Characters min please.");
            return true;
        } else {
            form.formValidation(form.messageInput, '1px #555 solid', false, 'pointer')
            return false
        }
    },

    formValidation: (element, border, isDisabled, cursor, message = null) => {
        element.style.border = border;
        form.submitFormButton.disabled = isDisabled;
        form.submitFormButton.style.cursor = cursor;

        if (message != null) {
            form.errorMessage.style.visibility = 'visible';
            form.errorMessage.innerText = message;
        } else {
            form.errorMessage.style.visibility = 'hidden';
            form.errorMessage.innerText = "";
        }
    },

}

document.addEventListener('DOMContentLoaded', form.init);