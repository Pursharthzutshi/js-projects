const emailId = document.querySelector(".input-email-id");
const username = document.querySelector(".input-username");
const password = document.querySelector(".input-password");
const passwordReCheck = document.querySelector(".input-password-recheck");

const inputDiv = document.querySelector(".input-div");
const button = document.querySelector(".button");

button.addEventListener("click", inputEmailId);
button.addEventListener("click", inputUsername);
button.addEventListener("click", inputPasswordCheck);
button.addEventListener("click", inputPasswordReCheck);

const showError = document.createElement("p");
showError.classList.add("show-error");
showError.style.background = "#be1c3a";
showError.style.transition = "1s";
inputDiv.appendChild(showError);

function inputEmailId() {
  const emailIdError = document.querySelector(".show-error");

  if (emailId.value == "") {
    emailId.setAttribute(
      "style",
      "transition:.4s;border:none;box-shadow:#be1c3a 0px 0px 1px 2px;"
    );
    emailIdError.innerHTML = "Please fill your email-id";
  } else {
    return;
  }
}

function inputUsername() {
  const usernameError = document.querySelector(".show-error");

  if (username.value == "") {
    username.setAttribute(
      "style",
      "transition:.4s;border:none;box-shadow:#be1c3a 0px 0px 1px 2px;"
    );

    usernameError.innerHTML = "Please Fill your username";
  } else {
    return;
  }
}

function inputPasswordCheck() {
  const passwordCheckError = document.querySelector(".show-error");

  if (password.value == "") {
    password.setAttribute(
      "style",
      "transition:.4s;border:none;box-shadow:#be1c3a 0px 0px 1px 2px;"
    );

    passwordCheckError.innerHTML = "Password is not filled";
  } else if (password.value.length < 5 || password.value.length > 30) {
    passwordCheckError.innerHTML = "Password should be between 5 to 30 letters";
  } else if (
    password.value == password.value.toLowerCase() ||
    password.value == password.value.toUpperCase()
  ) {
    passwordCheckError.innerHTML =
      "Password should contain atleast one Uppercase and one Lowercase letter";
  } else if (passwordReCheck.value == password.value) {
    password.style.boxShadow = ".2px .2px 5px .2px lightgray";
  } else {
    passwordCheckError.style = "none";
    return;
  }
}

function inputPasswordReCheck() {
  const passwordReCheckError = document.querySelector(".show-error");

  if (passwordReCheck.value != password.value) {
    passwordReCheckError.innerHTML = "Password not same";
  } else {
    return;
  }
}
