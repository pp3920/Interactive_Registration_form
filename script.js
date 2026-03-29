// Select DOM elements
const username = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const form = document.getElementById('registrationForm');


// Load saved username from localStorage
window.addEventListener('load', () => {
  const savedUser = localStorage.getItem('username');
  if (savedUser) {
    username.value = savedUser;
  }
});


// Username validation
username.addEventListener('input', () => {
  if (username.validity.valueMissing) {
    username.setCustomValidity('Username is required');
  } else {
    username.setCustomValidity('');
  }

  usernameError.textContent = username.validationMessage;
});


// Email validation
email.addEventListener('input', () => {
  if (email.validity.valueMissing) {
    email.setCustomValidity('Email is required');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Enter a valid email (example: name@example.com)');
  } else {
    email.setCustomValidity('');
  }

  emailError.textContent = email.validationMessage;
});


// Password validation
password.addEventListener('input', () => {
  const value = password.value;

  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);

  if (value.length < 8) {
    password.setCustomValidity('Minimum 8 characters required');
  } else if (!hasUppercase || !hasLowercase || !hasNumber) {
    password.setCustomValidity('Must include uppercase, lowercase, and number');
  } else {
    password.setCustomValidity('');
  }

  passwordError.textContent = password.validationMessage;
});


// Confirm Password validation
confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
  } else {
    confirmPassword.setCustomValidity('');
  }

  confirmPasswordError.textContent = confirmPassword.validationMessage;
});


// Form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Final validation check
  if (!username.validity.valid) {
    usernameError.textContent = username.validationMessage;
    username.focus();
    return;
  }

  if (!email.validity.valid) {
    emailError.textContent = email.validationMessage;
    email.focus();
    return;
  }

  if (!password.validity.valid) {
    passwordError.textContent = password.validationMessage;
    password.focus();
    return;
  }

  if (!confirmPassword.validity.valid) {
    confirmPasswordError.textContent = confirmPassword.validationMessage;
    confirmPassword.focus();
    return;
  }

  alert('Form submitted successfully!');

 
  localStorage.setItem('username', username.value);

  form.reset();
});