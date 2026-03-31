How did event.preventDefault() help in handling form submission?

event.preventDefault() stops the default behavior of the form, which is reloading the page and submitting data to the server.   

What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 Validation:

It uses built-in attributes like required, type="email", minlength which Works automatically in browser. It is Simple and fast to implement.


JavaScript Validation:

It has Custom logic (e.g., password strength, custom rules) and can show personalized error messages.

Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I used localStorage.setItem() to store the username when the user submitted the form. Then, on page load, I used localStorage.getItem() to retrieve the stored username and prefill the input field or display it. This ensures the data persists even after refreshing the page.
Limitation wise I think it is not secure for sensitive data.

Describe a challenge you faced in implementing the real-time validation and how you solved it.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

Challenge which I faced was related to implementation of validations and displaying them correctly on click. Custom messages helps you to understand what are the requirements and how we can inform the users.