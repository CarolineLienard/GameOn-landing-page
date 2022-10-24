function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Dom element
const modalbg = document.querySelector('.bground')

// Open/Close modal 
function handleOpen() {
  modalbg.style.display = 'block';
}

function handleClose() {
  modalbg.style.display = 'none';
}

// Validate form 
//** First name regex */
function validateFirstName() {
  const firstNameValidate = document.getElementById("firstName").value
  const errorMessage = document.getElementById("firstNameError")
  const firstNameRGEX = /^[a-zA-Z ]+$/
  const firstNameResult = firstNameRGEX.test(firstNameValidate)
  
  if (firstNameResult == false ) {
    errorMessage.style.display="block"
    return false
  } else {
    errorMessage.style.display="none"
    return true
    }
}

/** Last name regex */
function validateLastName() {
  const lastNameValidate = document.getElementById("lastName").value
  const errorMessage = document.getElementById("lastNameError")
  const lastNameRGEX = /^[a-zA-Z ]+$/
  const lastNameResult = lastNameRGEX.test(lastNameValidate)
  
  if (lastNameResult == false ) {
    errorMessage.style.display="block"
    return false
  } else {
    errorMessage.style.display="none"
    return true
    }
}

/** Email regex */
function validateEmail() {
  const emailValidate = document.getElementById("email").value
  const errorMessage = document.getElementById("emailError")
  const emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const emailResult = emailRGEX.test(emailValidate)
  
  if (emailResult == false ) {
    errorMessage.style.display="block"
    return false
  } else {
    errorMessage.style.display="none"
    return true
    }
}

/** Birth regex */
function validateBirth() {
  const birthValidate = document.getElementById("birthDate").value
  const errorMessage = document.getElementById("birthDateError")
  const birthRGEX = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/
  const birthResult = birthRGEX.test(birthValidate)
  
  if (birthResult == false ) {
    errorMessage.style.display="block"
    return false
  } else {
    errorMessage.style.display="none"
    return true
    }
}

/** Birth regex */
function validateQuantity() {
  const quantityValidate = document.getElementById("quantity").value
  const errorMessage = document.getElementById("quantityError")
  const quantityRGEX = /^[0-9]+$/
  const quantityResult = quantityRGEX.test(quantityValidate)

  if (quantityResult == false ) {
    errorMessage.style.display="block"
    return false
  } else {
    errorMessage.style.display="none"
    return true
    }
}

/* Location validation */
function validateLocation() {
  const checkForm = document.querySelector('.formData')
  const errorMessage = document.getElementById('checkError')

  if (checkForm.location.checked === false ) {
    errorMessage.style.display="block"
    return false
  } else {
    return true
  }
}

function onSubmit(event) {
  const modalSucceed = document.querySelector(".modal-succeed")
  const quantityInput = document.getElementById("quantity")
  const birthInput = document.getElementById("birthDate")
  const emailInput = document.getElementById("email")
  const lastNameInput = document.getElementById("lastName")
  const firstNameInput = document.getElementById("firstName")
  const valideForm = validateFirstName() && validateLastName() && validateEmail() && validateBirth() && validateQuantity()

  if(firstNameInput != '' && lastNameInput != '' && emailInput != '' && birthInput != '' && quantityInput != '' && valideForm) {
    event.preventDefault()
    alert('Merci pour votre inscription !')
    modalSucceed.style.display = 'block'

  } else {
    event.preventDefault()
    alert('Erreur dans le formulaire')
  }
}