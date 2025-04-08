const form = document.getElementById('contact-form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (nameField.value.trim() === '') {
		nameError.textContent = 'Please enter your name.';
	} else {
		nameError.textContent = '';
	}
	
	if (emailField.value.trim() === '') {
		emailError.textContent = 'Please enter your email address.';
	} else if (!emailField.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
		emailError.textContent = 'Please enter a valid email address.';
	} else {
		emailError.textContent = '';
	}
	
	if (messageField.value.trim() === '') {
		messageError.textContent = 'Please enter a message.';
	} else {
		messageError.textContent = '';
	}
	if (nameError.textContent === '' && emailError.textContent === '' && messageError.textContent === '') {
		console.log('Form submitted!');
	}
});