let mailLogIn = document.querySelector("#mailLogIn");
let passLogIn = document.querySelector("#passLogIn");
let btn = document.querySelector("#btn");
let displayAlert = document.querySelector("#displayAlert");



let usersList = [];


if (localStorage.getItem("users") == null) {
  usersList = [];
} else {
  usersList = JSON.parse(localStorage.getItem("users"));
}

btn.addEventListener("click", () => {
  let cartona = ``;
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].email == mailLogIn.value && usersList[i].password == passLogIn.value) {
      cartona = `
        <h2 id="welcome" class="text-light">Welcome ${usersList[i].user}</h2>
      `;
      sessionStorage.setItem("username", JSON.stringify(cartona));
      // window.open("/welcome/welcome.html", "_parent");
      location.href = "/welcome/welcome.html"
    } else {
      displayAlert.classList.replace("d-none",'d-block')
    }
  }
})


