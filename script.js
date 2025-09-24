// script.js

// =================================================================================
// PART 1: Event Handling
// =================================================================================
console.log("Part 1: Setting up Event Listeners");

// Event 1: Click Event to Change Text
const changeTextBtn = document.getElementById('changeTextBtn');
const messageText = document.getElementById('message-text');

changeTextBtn.addEventListener('click', function() {
    messageText.textContent = "The text has been changed by a button click!";
    console.log("Click event detected: Text updated.");
});

// Event 2: Mouseover/Mouseout to Change Style
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#007bff';
    this.style.color = 'white';
});

hoverBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#ccc';
    this.style.color = '#333';
});

// =================================================================================
// PART 2: Building Interactive Elements
// =================================================================================
console.log("Part 2: Initializing Interactive Elements");

// Interactive Element 1: Light/Dark Mode Toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    console.log("Interactive Element: Toggled light/dark mode.");
});

// Interactive Element 2: Simple Counter
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
let count = 0;

incrementBtn.addEventListener('click', function() {
    count++;
    counterValue.textContent = count;
    console.log("Interactive Element: Count incremented to " + count);
});

decrementBtn.addEventListener('click', function() {
    count--;
    counterValue.textContent = count;
    console.log("Interactive Element: Count decremented to " + count);
});

// =================================================================================
// PART 3: Custom Form Validation
// =================================================================================
console.log("Part 3: Initializing Form Validation");

const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formFeedback = document.getElementById('formFeedback');

// Function to validate username
function validateUsername() {
    if (usernameInput.value.length < 5) {
        usernameError.textContent = "Username must be at least 5 characters.";
        return false;
    }
    usernameError.textContent = ""; // Clear error message
    return true;
}

// Function to validate email using a simple regex
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }
    emailError.textContent = "";
    return true;
}

// Function to validate password
function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        return false;
    }
    passwordError.textContent = "";
    return true;
}

// Add event listeners for "live" validation on user input
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Add event listener for form submission
registrationForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Run all validation checks on form submission
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // If all checks pass, show a success message
    if (isUsernameValid && isEmailValid && isPasswordValid) {
        formFeedback.textContent = "Form submitted successfully!";
        formFeedback.style.color = "green";
        console.log("Form Validation: All fields are valid. Form would be submitted.");
        
        // In a real application, you would send the form data to a server here
        // e.g., using fetch() or a form.submit() call
    } else {
        formFeedback.textContent = "Please correct the errors above.";
        formFeedback.style.color = "red";
        console.log("Form Validation: Submission failed due to invalid fields.");
    }
});