const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const postalCode = document.getElementById('code');

/* const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirmPassword');
 */
const form = document.getElementById('form');

firstName.addEventListener('input', () => {
  if (firstName.checkValidity()) {
    firstName.parentElement.className = 'form-control success';
  } else {
    firstName.parentElement.className = 'form-control error';
    setError(firstName, 'First name required');
  }
});

lastName.addEventListener('input', () => {
  if (lastName.checkValidity()) {
    lastName.parentElement.className = 'form-control success';
  } else {
    lastName.parentElement.className = 'form-control error';
    setError(lastName, 'Last name required');
  }
});

// birthdate.addEventListener('input', () => {
//   if (birthdate.checkValidity()) {
//     birthdate.parentElement.className = 'form-control success';
//   } else if (birthdate.validity.rangeUnderflow) {
//     setError(birthdate, 'Date cannot be before January 1 1900');
//   } else if (birthdate.validity.rangeOverflow) {
//     setError(birthdate, 'Date cannot be after December 31 2003');
//   } else if (birthdate.validity.valueMissing) {
//     setError(birthdate, 'Must enter your birthdate');
//   }
// });

email.addEventListener('input', () => {
  if (email.validity.patternMismatch) {
    setError(email, 'Enter a valid email');
  } else if (email.validity.valueMissing) {
    setError(email, 'Email is required');
  } else {
    email.parentElement.className = 'form-control success';
  }
});

phone.addEventListener('input', () => {
  var number = phone.value;

  number = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  phone.value = number;
  if (phone.validity.patternMismatch) {
    setError(phone, 'Enter a valid phone number');
  } else if (phone.validity.valueMissing) {
    setError(phone, 'Phone number is required');
  } else {
    phone.parentElement.className = 'form-control success';
  }
});

// postalCode.addEventListener('input', () => {
//   var code = postalCode.value;

//   // postalCode.value = code.replace(/([a-zA-Z]\d[a-zA-Z])(\d[a-zA-Z]\d)/gm, "$1 $2");
//   if (postalCode.validity.valueMissing) {
//     setError(postalCode, 'Postal code is required');
//   } else if (postalCode.validity.patternMismatch) {
//     setError(postalCode, "Enter a valid postal code. 'A6A 6A6'");
//     postalCode.value = code.replace(/([a-zA-Z]\d[a-zA-Z])(\d)/gm, '$1 $2');
//   } else {
//     postalCode.parentElement.className = 'form-control success';
//   }
// });

// username.addEventListener('input', () => {
//   if (username.validity.valueMissing) {
//     setError(username, 'Username is required');
//   } else if (username.validity.tooShort) {
//     setError(username, 'Username is too short (Minimum length: 8 characters)');
//   } else if (username.checkValidity()) {
//     username.parentElement.className = 'form-control success';
//   }
// });

// password.addEventListener('input', () => {
//   if (password.validity.valueMissing) {
//     setError(password, 'Password is required');
//   } else if (password.validity.patternMismatch) {
//     setError(
//       password,
//       'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters',
//     );
//   } else if (password.checkValidity()) {
//     password.parentElement.className = 'form-control success';
//   }
// });

// passwordConfirmation.addEventListener('input', () => {
//   if (passwordConfirmation.value !== password.value) {
//     setError(passwordConfirmation, 'Passwords must match');
//   } else {
//     passwordConfirmation.parentElement.className = 'form-control success';
//   }
// });

function setError(input, message) {
  const control = input.parentElement;
  control.className = 'form-control error';
  const small = control.querySelector('small');

  small.textContent = message;
}
