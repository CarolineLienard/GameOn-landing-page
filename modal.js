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
const modalSucceed = document.querySelector(".modal-succeed")

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
  const location1 = document.getElementById('location1').checked
  const location2 = document.getElementById('location2').checked
  const location3 = document.getElementById('location3').checked
  const location4 = document.getElementById('location4').checked
  const location5 = document.getElementById('location5').checked
  const location6 = document.getElementById('location6').checked
  const errorMessage = document.getElementById('checkError')

  if (location1 || location2 || location3 || location4 || location5 || location6 ) {
    errorMessage.style.display="none"
    return true
  } else {
    errorMessage.style.display="block"
    return false
  }
}

/* CTO validate */ 
function validateCTO() {
  const ctoValue = document.getElementById('checkbox1').checked
  const errorMessage = document.getElementById('ctoError')
  
  if(!ctoValue) {
    errorMessage.style.display="block"
    return false
  } else {
    errorMessage.style.display="none"
    return true
  }
} 

function onSubmit(event) {
  const quantityInput = document.getElementById("quantity")
  const birthInput = document.getElementById("birthDate")
  const emailInput = document.getElementById("email")
  const lastNameInput = document.getElementById("lastName")
  const firstNameInput = document.getElementById("firstName")
  const valideForm = validateFirstName() && validateLastName() && validateEmail() && validateBirth() && validateQuantity() && validateLocation() && validateCTO() 

  if(firstNameInput != '' && lastNameInput != '' && emailInput != '' && birthInput != '' && quantityInput != '' && valideForm) {
    event.preventDefault()
    modalbg.style.display = 'none';
    modalSucceed.style.display = 'flex'
  } else {
    event.preventDefault()
  }
}

function closeSucceed() {
  modalSucceed.style.display = 'none'
}