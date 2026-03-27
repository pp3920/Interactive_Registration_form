
const username = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

const confirmPassword = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const form = document.getElementById('registrationForm');






// session storage  

window.addEventListener('load', () => {
    const savedUserName = sessionStorage.getItem('username');
    if (savedUserName) {
        username.value = savedUserName;
    }
});


//form submit handling

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //save username
    sessionStorage.setItem("username", username.value)

    //validation for name

    if (username.validity.valueMissing) {
        username.setCustomValidity("Name filed should not be empty!!")
    } else {
        username.setCustomValidity("")
    }

    //validation for email

    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
    } else if (email.validity.valueMissing) {
        email.setCustomValidity('We need your email address to contact you!');
    }
    else {
        email.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    emailError.textContent = email.validationMessage;



    //validation for password


    if (!password.validity.valid) {
        passwordError.textContent = "Password required";
        return;
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        return;
    }

    alert("Form submitted successfully!");
    form.reset();
});




/*
//validation for user name
username.addEventListener("blur", (e) => {
if(username.validity.valueMissing){
    username.setCustomValidity("Name filed should not be empty!!")
} else {
    username.setCustomValidity("")
}
username.reportValidity()
})


//validation for email

  email.addEventListener('input', function(event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
    } else if (email.validity.valueMissing) {
      email.setCustomValidity('We need your email address to contact you!');
    }
    else {
      email.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    emailError.textContent = email.validationMessage;
  });

  
  password.addEventListener('input', function(event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
    } else if (email.validity.valueMissing) {
      email.setCustomValidity('We need your email address to contact you!');
    }
    else {
      email.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    customEmailError.textContent = email.validationMessage;
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission
 
    if (!nameInput.validity.valid) {
      alert('Please enter your name.');
      nameInput.focus();
      return; // Stop further processing if invalid
    }
 
    // If valid, process the form data
    const formData = new FormData(form);
    const nameValue = formData.get('name');
    alert('Form submitted! Name: ' + nameValue);
    // Here you would typically send data to a server using fetch() or XMLHttpRequest
    // e.g., fetch('/submit-form', { method: 'POST', body: formData });
    form.reset(); // Optionally reset the form
  });


