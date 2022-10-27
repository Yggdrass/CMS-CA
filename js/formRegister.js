

const form = document.querySelector("#registerForm");

const nameRegister = document.querySelector("#nameRegister");
const nameRegisterError = document.querySelector("#nameRegisterError");

const passwordRegister = document.querySelector("#passwordRegister");
const passwordRegisterError = document.querySelector("#passwordRegisterError");

const emailRegister = document.querySelector("#emailRegister");
const emailRegisterError = document.querySelector("#emailRegisterError");


const container = document.querySelector(".container");

const buttonRegister = document.querySelector("#registerToAccount");



function validateForm() {

    try {
    if (checkLength(nameRegister.value, 0) === true) {
        nameRegisterError.style.display = "none";
}
    else {
        nameRegisterError.style.display = "block";
}

    if(validateEmail(emailRegister.value)) {
        emailRegisterError.style.display = "none";
} 
    else {
        emailRegisterError.style.display = "block";
}

    if (checkLength(passwordRegister.value, 24) === true) {
        passwordRegisterError.style.display = "none";
}   
    else {
        passwordRegisterError.style.display = "block";
        }  
    }
    catch {
        console.log("Form not filled out correctly");
    }
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(emailRegister) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}






buttonRegister.addEventListener("submit", register) 
    if(form.addEventListener() === true) {
        return true;
    }
    else {
        return false;
    };

function register () {
    if(validateForm === true) {
        return true;
    }
    else {
        return false;
    }
}

