

const form = document.querySelector("#contactForm");

const userName = document.querySelector("#userName");
const userNameError = document.querySelector("#userNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const issue = document.querySelector("#issue");
const issueError = document.querySelector("#issueError");





function validateForm() {

    event.preventDefault();

    try {
    if (checkLength(userName.value, 0) === true) {
        userNameError.style.display = "none";
}
    else {
        userNameError.style.display = "block";
}

    if (checkLength(subject.value, 4) === true) {
        subjectError.style.display = "none";
}
    else {
        subjectError.style.display = "block";
}

    if(validateEmail(email.value)) {
        emailError.style.display = "none";
} 
    else {
        emailError.style.display = "block";
}

    if (checkLength(issue.value, 24) === true) {
        issueError.style.display = "none";
}   
    else {
        issueError.style.display = "block";
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

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
