// Function to validate user inputs and check the palindrome
function validateInputs(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get input values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const inputString = document.getElementById("inputString").value.trim();

    // Combine first and last names
    const fullName = firstName + " " + lastName;

    // Validate name length
    if (fullName.length > 20) {
        alert("Your full name must not exceed 20 characters.");
        return false;
    }

    // Validate zip code (must be exactly 5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        alert("Please enter a valid 5-digit zip code.");
        return false;
    }

    // Check for palindrome
    checkPalindrome(inputString);
}

// Function to check if the input string is a palindrome
function checkPalindrome(input) {
    // Remove spaces and convert to lowercase for comparison
    const basicString = input.replace(/\s+/g, '').toLowerCase();
    const reversedString = basicString.split('').reverse().join('');

    // Get result container
    const result = document.getElementById("result");

    // Display the result
    if (basicString === reversedString) {
        result.textContent = `Hello, ${document.getElementById("firstName").value}! The word "${input}" is a palindrome!`;
        showSecretMessage();
    } else {
        result.textContent = `Hello, ${document.getElementById("firstName").value}! The word "${input}" is not a palindrome.`;
    }
}

// Function to display the secret message
function showSecretMessage() {
    setTimeout(() => {
        alert("Welcome to the club!");
    }, 500);
}