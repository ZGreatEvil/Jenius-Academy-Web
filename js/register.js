// First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");
// Last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");
// Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");
// Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
// Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");
// Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");
// Submit
let submitButton = document.getElementById("submit-button");
// Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

// Password Verification
const passwordVerify = (password) => {
    if (password.length < 8) {
        return false;
    }

    let hasDigit = false;
    let hasUpper = false;
    let hasLower = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char === ' ') {
            return false;
        }

        if (char >= '0' && char <= '9') {
            hasDigit = true;
        }

        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }

        if (char >= 'a' && char <= 'z') {
            hasLower = true;
        }

        if (hasDigit && hasUpper && hasLower) {
            return true;
        }
    }

    return false;
};

// Text verification (if input contains only text)
const textVerify = (text) => {
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === ' ') {
            return false;
        }

        if (char >= '0' && char <= '9') {
            return false;
        }
    }

    return true;
};

// Phone number verification
const phoneVerify = (number) => {
    for (let i = 0; i < number.length; i++) {
        const char = number[i];

        if (char === ' ') {
            return false;
        }

        if (char >= 'A' && char <= 'Z') {
            return false;
        }

        if (char >= 'a' && char <= 'z') {
            return false;
        }
    }

    return true;
};

// Email verification
const emailVerify = (input) => {
    let atSymbol = input.indexOf('@');
    let dotSymbol = input.lastIndexOf('.');
    let spaceSymbol = input.indexOf(' ');

    if((atSymbol != -1) && (dotSymbol != -1) && (spaceSymbol == -1) && (atSymbol != 0 ) &&
      (dotSymbol != 0) && (input.length > dotSymbol + 1) && (dotSymbol > atSymbol + 1)) {
        return true;
    } else {
        return false;
    }
};

// For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    // input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    // input has some content
    emptyErrorReference.classList.add("hide");
  }
};

// For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

// For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

// First name
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    // If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    // for false
    errorUpdate(firstNameInput, firstNameError);
    // empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});

// Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});

// Phone
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});

// Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

// Password
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});
// Verify password
verifyPasswordInput.addEventListener("input", () => {
  if (verifyPasswordInput.value === passwordInput.value) {
    verifyPasswordError.classList.add("hide");
    validInput(verifyPasswordInput);
  } else {
    errorUpdate(verifyPasswordInput, verifyPasswordError);
    emptyUpdate(passwordInput, emptyVerifyPasswordError, verifyPasswordError);
  }
});
// Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});