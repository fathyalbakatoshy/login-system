let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let displayAlert = document.querySelector("#displayAlert");

let usersList = [];

btn.addEventListener("click", () => {
  if (validateUser() && validateEmail() && validatePassword()) {
    usersList = JSON.parse(localStorage.getItem("users")) || [];

    let newUsers = {
      user: userName.value,
      email: email.value,
      password: password.value,
    };

    let searchUsers = usersList.some(
      (user) => user.user === userName.value || user.email === email.value
    );

    if (searchUsers) {
      userName.classList.remove("is-valid");
      email.classList.remove("is-valid");
      password.classList.remove("is-valid");
      displayAlert.classList.remove("d-none");
      displayAlert.classList.add("d-block");
      userName.classList.add("is-invalid");
      email.classList.add("is-invalid");
      password.classList.add("is-invalid");
    } else {
      usersList.push(newUsers);
      localStorage.setItem("users", JSON.stringify(usersList));
      clearInput();
      userName.classList.remove("is-valid");
      email.classList.remove("is-valid");
      password.classList.remove("is-valid");
      displayAlert.classList.add("d-none");
      displayAlert.classList.remove("d-block");
    }
  } else {
    userName.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
  }
});

function clearInput() {
  userName.value = "";
  password.value = "";
  email.value = "";
}

function validateUser() {
  let regex = /^[a-z]\w{2,}$/gi;
  if (regex.test(userName.value)) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    return false;
  }
}

function validateEmail() {
  let regex = /\w{1,}@[a-z]{0,8}.[a-z]{0,9}/gi;
  if (regex.test(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    return false;
  }
}

function validatePassword() {
  let regex = /\w{8,20}/gi;
  if (regex.test(password.value)) {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    return false;
  }
}

userName.addEventListener("change", validateUser);
email.addEventListener("change", validateEmail);
password.addEventListener("change", validatePassword);
