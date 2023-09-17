// get the elements from the document
const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const password = document.getElementById("password");


// add submit eventlistener to form element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // function to validate form fields
  validateForm();
});

// type of messages for individual form fields
const messageType = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

// set success or error message and css classes
const setMessage = (type, element, message = "") => {
  // get the parent element of input element
  const inputGroup = element.parentElement;

  // get the error element for above input
  const errorField = inputGroup.querySelector(".error__field");

  // set success or error
  switch (type) {
    case messageType.ERROR:
      errorField.innerText = message;
      inputGroup.classList.add("error");
      break;
    case messageType.SUCCESS:
    default:
      errorField.innerText = "";
      inputGroup.classList.remove("error");
      break;
  }
};

// check if the value is numric
const isNumeric = (num) => {
  return !isNaN(num - parseFloat(num));
};

// check if the password is valid
const isValidPassword = (val) => {
  return val.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
};

// validate form fields function
const validateForm = () => {
  // get value of all the form fields
  const firstNameValue = firstName.value.trim();
  const passwordValue = password.value.trim();
  

  // is forrm valid variable
  let isFormValid = true;

  // check first name field for error and success
  if (firstNameValue === "") {
    setMessage(messageType.ERROR, firstName, "First Name is required");
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, firstName);
  }

  // check password field for error and success
  
  if (passwordValue === "") {
    setMessage(messageType.ERROR, password, "Password is required");
    isFormValid = false;
  } else if (!isValidPassword(passwordValue)) {
    setMessage(messageType.ERROR, password, "Password is invalid");
    isFormValid = false;
  } else {
    setMessage(messageType.SUCCESS, password);
  }


  if (isFormValid) {
    // form is valid and can be submitted
    alert("Form Submitted");
  }
};
