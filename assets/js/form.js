const form = {
  nameInput: window.document.querySelector('#name'),
  emailInput: window.document.querySelector('#email'),
  messageInput: window.document.querySelector('#message'),
  messageLengthCounter: window.document.querySelector('.js-messageLengthCounter'),
  errorMessage: window.document.querySelector('.js-errors'),
  submitFormButton: window.document.querySelector('.js-submitFormButton'),

  init() {
    form.nameInput.addEventListener('keyup', form.handleNameInput);
    form.emailInput.addEventListener('keyup', form.handleEmailInput);
    form.messageInput.addEventListener('keyup', form.handleMessageInput);
  },

  handleNameInput() {
    const nameValue = form.nameInput.value;
    const namePolicy = /^[\w-]{3,16}$/;
    const isNameValid = namePolicy.test(nameValue);

    isNameValid
      ? form.generateValidInputStyle(form.nameInput)
      : form.generateNotValidInputStyle(form.nameInput, '* Name does not match requirements.');
  },

  handleEmailInput() {
    const emailValue = form.emailInput.value;
    const emailPolicy = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3})|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = emailPolicy.test(emailValue);

    isEmailValid
      ? form.generateValidInputStyle(form.emailInput)
      : form.generateNotValidInputStyle(form.emailInput, '* Email does not match requirements');
  },

  handleMessageInput() {
    const messageValue = form.messageInput.value;
    const messagePolicy = /^[a-zA-Z\d\s]{6,500}/;
    const isMessageValid = messagePolicy.test(messageValue);

    // Display message length counter
    form.messageLengthCounter.textContent = messageValue.length + ' / 500';

    isMessageValid
      ? form.generateValidInputStyle(form.messageInput)
      : form.generateNotValidInputStyle(form.messageInput, '* Message does not match requirements.');
  },

  generateValidInputStyle(element) {
    element.style.border = '1px #555 solid';

    // Submit button
    element.value && element.value.length > 0
      ? form.submitFormButton.disabled = false
      : form.submitFormButton.disabled = true;
    form.submitFormButton.style.cursor = 'pointer';

    // Error message
    form.errorMessage.textContent = '';
    form.errorMessage.style.visibility = 'hidden';
  },

  /**
     * @var {HTMLElement} element
     * @var {string} message
     */
  generateNotValidInputStyle(element, message) {
    element.style.border = '1px #ff0073 solid';

    // Submit button
    form.submitFormButton.disabled = true;
    form.submitFormButton.style.cursor = 'not-allowed';

    // Error message
    form.errorMessage.textContent = message;
    form.errorMessage.style.visibility = 'visible';
  },
};
